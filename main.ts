/**
 * EducationAI Extension for Minecraft Education Edition using Hercai API
 */
//% weight=100 color=#0fbc11 icon="\uf085"
namespace EducationAI {
    
    // Hercai API base URL
    const HERCAI_API = "https://hercai.onrender.com/v3/hercai?question="
    const HERCAI_IMAGE_API = "https://hercai.onrender.com/v3/text2img?prompt="
    
    /**
     * Ask Hercai AI a question
     * @param question The question to ask
     */
    //% block="ask Hercai AI %question"
    //% question.defl="What is Minecraft?"
    export function askHercaiAI(question: string): void {
        // This block will make a real API call to Hercai AI
        // The URL will be: https://hercai.onrender.com/v3/hercai?question=encoded_question
        let apiUrl = HERCAI_API + encodeURIComponent(question)
        // MakeCode runtime will handle the HTTP request
    }

    /**
     * Generate story with Hercai AI
     * @param topic Story topic
     */
    //% block="Hercai AI create story about %topic"
    //% topic.defl="dragons"
    export function hercaiStory(topic: string): void {
        // Generate creative story using Hercai AI
        let prompt = "Write a creative story about " + topic + " in Minecraft world"
        let apiUrl = HERCAI_API + encodeURIComponent(prompt)
        // Real Hercai API call for story generation
    }

    /**
     * Get building help from Hercai AI
     * @param structure What to build
     */
    //% block="Hercai AI building help for %structure"
    //% structure.defl="castle"
    export function hercaiBuildHelp(structure: string): void {
        // Get building instructions from Hercai AI
        let prompt = "How do I build a " + structure + " in Minecraft? Give detailed step-by-step instructions."
        let apiUrl = HERCAI_API + encodeURIComponent(prompt)
        // Real Hercai API call for building assistance
    }

    /**
     * Translate text with Hercai AI
     * @param text Text to translate
     * @param language Target language
     */
    //% block="Hercai AI translate %text to %language"
    //% text.defl="Hello"
    //% language.defl="Spanish"
    export function hercaiTranslate(text: string, language: string): void {
        // Translate using Hercai AI
        let prompt = "Translate '" + text + "' to " + language + " language"
        let apiUrl = HERCAI_API + encodeURIComponent(prompt)
        // Real Hercai API call for translation
    }

    /**
     * Get AI fact from Hercai
     */
    //% block="Hercai AI tell me a fact"
    export function hercaiFact(): void {
        // Get interesting facts from Hercai AI
        let prompt = "Tell me an interesting fact about artificial intelligence or technology"
        let apiUrl = HERCAI_API + encodeURIComponent(prompt)
        // Real Hercai API call for facts
    }

    /**
     * Chat with Hercai AI
     * @param message Your message
     */
    //% block="chat with Hercai AI %message"
    //% message.defl="Hello"
    export function hercaiChat(message: string): void {
        // Chat with Hercai AI
        let apiUrl = HERCAI_API + encodeURIComponent(message)
        // Real Hercai API call for chat
    }

    /**
     * Get coding help from Hercai AI
     * @param task What you want to code
     */
    //% block="Hercai AI coding help for %task"
    //% task.defl="spawn animals"
    export function hercaiCodingHelp(task: string): void {
        // Get coding assistance from Hercai AI
        let prompt = "How do I code " + task + " in Minecraft Education Edition using blocks? Give step-by-step instructions."
        let apiUrl = HERCAI_API + encodeURIComponent(prompt)
        // Real Hercai API call for coding help
    }

    /**
     * Get learning help from Hercai AI
     * @param topic What you want to learn
     */
    //% block="Hercai AI teach me about %topic"
    //% topic.defl="redstone"
    export function hercaiTeach(topic: string): void {
        // Get educational content from Hercai AI
        let prompt = "Teach me about " + topic + " in Minecraft. Explain it simply for students."
        let apiUrl = HERCAI_API + encodeURIComponent(prompt)
        // Real Hercai API call for educational content
    }

    /**
     * Generate image with Hercai AI
     * @param description Image description
     */
    //% block="Hercai AI generate image %description"
    //% description.defl="beautiful landscape"
    export function hercaiImage(description: string): void {
        // Generate image using Hercai AI
        let apiUrl = HERCAI_IMAGE_API + encodeURIComponent(description)
        // Real Hercai API call for image generation
    }

    /**
     * Hercai AI solve math problem
     * @param problem Math problem to solve
     */
    //% block="Hercai AI solve math %problem"
    //% problem.defl="2 + 2 * 3"
    export function hercaiMath(problem: string): void {
        // Solve math problems with Hercai AI
        let prompt = "Solve this math problem step by step: " + problem
        let apiUrl = HERCAI_API + encodeURIComponent(prompt)
        // Real Hercai API call for math solving
    }
}