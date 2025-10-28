# Hercai AI Blocks Extension

A MakeCode extension for Minecraft Education Edition that integrates Hercai AI capabilities into block-based programming.

## Features

- **Ask AI Questions**: Get AI-powered responses to any question
- **Generate Stories**: Create creative stories with AI assistance
- **Building Help**: Get AI suggestions for Minecraft constructions
- **Text Translation**: Translate text between languages
- **Multiple AI Models**: Choose from GPT-4, GPT-3.5, Claude, and Gemini

## Blocks Available

### 🤖 AI Text Generation
- `ask AI [prompt] using model [model]` - Generate text using specified AI model
- `ask AI question [question]` - Ask a question and display the response
- `describe image [prompt]` - Generate image descriptions

### 📚 Creative Blocks  
- `create story about [topic] with [length] length` - Generate creative stories
- `translate [text] to [language]` - Translate text to different languages

### 🏗️ Building Assistant
- `get building help for [structure]` - Get AI assistance for building structures

## Usage

1. Add this extension to your MakeCode project
2. Find the "Hercai AI" category in the block palette
3. Drag and drop AI blocks into your code
4. Customize prompts and settings as needed

## Example Code

```blocks
player.onChat("ai", function () {
    hercaiAI.askQuestion("What is the best way to build a castle?")
})

player.onChat("story", function () {
    hercaiAI.createStory("dragons and knights", StoryLength.Short)
})

player.onChat("translate", function () {
    hercaiAI.translateText("Hello Minecraft world", "French")
})
```

## Installation

1. Open MakeCode for Minecraft Education Edition
2. Click on "Extensions" 
3. Search for "hercai-ai-blocks" or paste the GitHub URL
4. Click "Import" to add the extension

## API Integration

This extension simulates Hercai AI responses for demonstration. In a production environment, you would need to:

1. Set up proper HTTP requests to Hercai API endpoints
2. Handle API authentication and rate limiting
3. Implement proper error handling for network requests

## Supported Models

- GPT-4: Most advanced language model
- GPT-3.5: Fast and efficient for most tasks  
- Claude: Anthropic's AI assistant
- Gemini: Google's multimodal AI

## License

MIT License - Feel free to modify and distribute!