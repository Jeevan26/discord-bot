# Discord Bot Skeleton

This is a modular Discord bot using the latest [discord.js](https://discord.js.org/) library (v14+), with support for slash commands.

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create a `.env` file in the project root:**
   ```env
   DISCORD_TOKEN=your-bot-token-here
   CLIENT_ID=your-client-id-here
   ```
   - Replace `your-bot-token-here` with your actual Discord bot token.
   - Replace `your-client-id-here` with your application's client ID (from the Discord Developer Portal).

3. **Register slash commands:**
   ```bash
   node src/deploy-commands.js
   ```
   Run this whenever you add or change commands.

4. **Run the bot:**
   ```bash
   node index.js
   ```

## Project Structure
- `index.js`: Entry point, loads the bot from `src/`
- `src/bot.js`: Main bot logic, loads commands modularly
- `src/commands/`: Place each slash command as a separate file
- `src/deploy-commands.js`: Script to register slash commands with Discord

## Features
- Responds to `/ping` with `Pong!`
- Modular command structure
- Uses environment variables for token and client ID

## References
- [discord.js Guide](https://discordjs.guide/)
- [discord.js Documentation](https://discord.js.org/#/docs/main/stable/general/welcome) 