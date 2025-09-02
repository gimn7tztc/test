import 'dotenv/config';
import express from 'express';
import OpenAI from 'openai';

const app = express();
app.use(express.json());
app.use(express.static('.'));

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post('/plan', async (req, res) => {
  const { location, purpose, transport, accommodation } = req.body;
  const prompt = `Please create a travel itinerary with these details:\nLocation: ${location}\nPurpose: ${purpose}\nTransport: ${transport}\nAccommodation: ${accommodation}\nProvide a day-by-day plan.`;
  try {
    const completion = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }]
    });
    res.json({ plan: completion.choices[0].message.content.trim() });
  } catch (err) {
    res.status(500).json({ error: 'Failed to generate plan', details: err.message });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
