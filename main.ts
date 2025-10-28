/**
 * AI-powered blocks for Minecraft Education Edition using Hercai AI
 */
//% weight=100 color=#0fbc11 icon="\uf085" block="Hercai AI"
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