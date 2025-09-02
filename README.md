# Travel Planner

Web app that generates travel itineraries via OpenAI. Users can input destination, purpose, transport, and lodging to receive a proposed plan.

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Configure your OpenAI API key. The easiest way is to copy `.env.example` to `.env` and fill in your key:

   ```bash
   cp .env.example .env
   # edit .env and set OPENAI_API_KEY
   ```

   You can also set the `OPENAI_API_KEY` environment variable manually instead.

3. Start the server:

   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser and submit the form to generate a travel plan.
