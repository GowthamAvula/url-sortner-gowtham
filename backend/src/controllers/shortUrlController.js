import { nanoid } from 'nanoid'
import { ShortURL } from '../models/shorturl.model.js';

export const generateShortUrl = async ( req, res )=>{
   try {
        console.log(req.body);

        if(!req.body.originalUrl){
            console.error("Original URL not provided in request body");
            return res.status(400).json({ status: "BAD_REQUEST", message: "Original URL is required" });
        }

        let shortcode = req.body.customUrl;
        
        if (shortcode) {
            shortcode = shortcode.trim();
            const exist = await ShortURL.findOne({ shortCode: shortcode });
            if (exist) {
                return res.status(400).json({ status: "BAD_REQUEST", message: "Custom URL code is already taken" });
            }
        } else {
            shortcode = nanoid(7);
            let newRecord = await ShortURL.findOne({shortCode: shortcode})
            while(newRecord){
                  shortcode = nanoid(7);
                  newRecord = await ShortURL.findOne({shortCode: shortcode});
            }
        }

        const newShortUrlRecord = await ShortURL.create({
            originalUrl: req.body.originalUrl,
            shortCode: shortcode,
            userId: req.user.id,
            expiresAt: req.body.expiresAt || null,
            title: req.body.title || null
        });

        return res.status(200).json(newShortUrlRecord);

    } catch(error) {
        console.error("Error in generating short URL", error.message);
        return res.status(500).json({ status: "INTERNAL_SERVER_ERROR", message: "Error in generating short URL" });
    }
}

export const redirectUrl = async ( req, res )=>{
   try {
        const { shorturl } = req.params;

        const exist = await ShortURL.findOne({shortCode:shorturl });

        if(!exist){
            console.error("Short URL NOT found");
            return res.status(404).json({ status: "NOT_FOUND", message: "Short URL not found" });
        }

        // Check if link is inactive
        if (exist.isActive === false) {
            return res.status(403).json({ status: "FORBIDDEN", message: "This short URL has been deactivated" });
        }

        // Check if link is expired
        if (exist.expiresAt && new Date(exist.expiresAt) < new Date()) {
            return res.status(410).json({ status: "GONE", message: "This short URL has expired" });
        }

        // Increment click count
        exist.clickCount = (exist.clickCount || 0) + 1;
        await exist.save();

        res.redirect(exist.originalUrl);

    } catch(error) {
        console.error("Error in redirecting short URL", error.message);
        return res.status(500).json({ status: "INTERNAL_SERVER_ERROR", message: "Error in redirecting short URL" });
    }
}
