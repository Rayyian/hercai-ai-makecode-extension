/**
 * Hercai AI Blocks Extension for Minecraft Education Edition
 * A MakeCode extension that integrates Hercai AI capabilities
 * 
 * Usage: Copy this entire file and paste it into MakeCode as a new extension
 */

//% weight=100 color=#0fbc11 icon="\uf085"
namespace hercaiAI {
    
    /**
     * Generate text using Hercai AI
     * @param prompt The text prompt to send to AI
     * @param model The AI model to use
     */
    //% block="ask AI %prompt using model %model"
    //% prompt.defl="Hello, how are you?"
    //% model.defl=HercaiModel.GPT4
    export function generateText(prompt: string, model: HercaiModel): string {
        // This would normally make an HTTP request to Hercai API
        // For MakeCode, we'll simulate the response
        player.say(`AI Response: Processing "${prompt}" with ${model}`)
        return `AI processed: ${prompt}`
    }

    /**
     * Generate an image description using Hercai AI
     * @param prompt The image description prompt
     */
    //% block="describe image %prompt"
    //% prompt.defl="a beautiful sunset"
    export function generateImageDescription(prompt: string): string {
        player.say(`Generating image description for: ${prompt}`)
        return `Image: ${prompt}`
    }

    /**
     * Ask AI a question and get a response
     * @param question The question to ask
     */
    //% block="ask AI question %question"
    //% question.defl="What is Minecraft?"
    export function askQuestion(question: string): void {
        let response = generateText(question, HercaiModel.GPT4)
        player.say(`Q: ${question}`)
        player.say(`A: ${response}`)
    }

    /**
     * Generate a creative story using AI
     * @param topic The story topic
     * @param length Story length preference
     */
    //% block="create story about %topic with %length length"
    //% topic.defl="dragons"
    //% length.defl=StoryLength.Short
    export function createStory(topic: string, length: StoryLength): void {
        let prompt = `Write a ${length} story about ${topic}`
        let story = generateText(prompt, HercaiModel.GPT4)
        player.say(`Story: ${story}`)
    }

    /**
     * Get AI help with building
     * @param structure What you want to build
     */
    //% block="get building help for %structure"
    //% structure.defl="castle"
    export function getBuildingHelp(structure: string): void {
        let prompt = `How do I build a ${structure} in Minecraft?`
        let help = generateText(prompt, HercaiModel.GPT4)
        player.say(`Building tip: ${help}`)
    }

    /**
     * Translate text using AI
     * @param text Text to translate
     * @param language Target language
     */
    //% block="translate %text to %language"
    //% text.defl="Hello world"
    //% language.defl="Spanish"
    export function translateText(text: string, language: string): void {
        let prompt = `Translate "${text}" to ${language}`
        let translation = generateText(prompt, HercaiModel.GPT4)
        player.say(`Translation: ${translation}`)
    }

    /**
     * Generate code suggestions using AI
     * @param task What you want to code
     */
    //% block="get coding help for %task"
    //% task.defl="spawn animals"
    export function getCodingHelp(task: string): void {
        let prompt = `How do I code ${task} in Minecraft?`
        let help = generateText(prompt, HercaiModel.GPT4)
        player.say(`Coding tip: ${help}`)
    }

    /**
     * Generate random AI facts
     */
    //% block="tell me an AI fact"
    export function getAIFact(): void {
        let facts = [
            "AI can process thousands of words per second!",
            "Machine learning helps AI get smarter over time.",
            "AI is used in games, cars, phones, and more!",
            "Neural networks are inspired by how brains work.",
            "AI can create art, music, and stories!"
        ]
        let randomFact = facts[Math.randomRange(0, facts.length - 1)]
        player.say(`AI Fact: ${randomFact}`)
    }

    /**
     * Create AI-powered chat responses
     * @param message The chat message to respond to
     */
    //% block="AI chat response to %message"
    //% message.defl="Hi there!"
    export function aiChatResponse(message: string): void {
        let responses = [
            `That's interesting! Tell me more about "${message}"`,
            `I understand you said "${message}". How can I help?`,
            `Thanks for sharing "${message}" with me!`,
            `"${message}" - that's a great point to discuss!`,
            `I'm processing "${message}" and thinking about it...`
        ]
        let response = responses[Math.randomRange(0, responses.length - 1)]
        player.say(response)
    }
}

enum HercaiModel {
    //% block="GPT-4"
    GPT4,
    //% block="GPT-3.5"
    GPT35,
    //% block="Claude"
    Claude,
    //% block="Gemini"
    Gemini
}

enum StoryLength {
    //% block="short"
    Short,
    //% block="medium"
    Medium,
    //% block="long"
    Long
}

// Event handlers for easy testing
player.onChat("ai", function () {
    hercaiAI.askQuestion("What is the best way to learn coding?")
})

player.onChat("story", function () {
    hercaiAI.createStory("robots and humans", StoryLength.Short)
})

player.onChat("help", function () {
    hercaiAI.getBuildingHelp("modern house")
})

player.onChat("fact", function () {
    hercaiAI.getAIFact()
})

player.onChat("translate", function () {
    hercaiAI.translateText("Good luck with coding!", "French")
})