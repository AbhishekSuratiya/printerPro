import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission route
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, phone, message } = req.body;
      
      // Here you would typically save this data to a database
      // or send an email notification, but for this demo we'll just log it
      console.log('Contact form submission:', { name, email, phone, message });
      
      // Simulate a slight delay to show loading state
      await new Promise(resolve => setTimeout(resolve, 500));
      
      res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      res.status(500).json({ message: 'Failed to send message' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
