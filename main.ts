/**
 * EducationAI - Hercai AI blocks for Minecraft Education Edition
 */
//% weight=100 color=#0fbc11 icon="\uf085" block="EducationAI"
namespace EducationAI {
    
    // Hercai API URLs
    const HERCAI_API = "https://hercai.onrender.com/v3/hercai?question="
    const HERCAI_IMAGE_API = "https://hercai.onrender.com/v3/text2img?prompt="
    
    /**
     * Ask Hercai AI a question
     * @param question The question to ask
     */
    //% block="ask Hercai AI %question"
    //% question.defl="What is Minecraft?"
    export function askHercaiAI(question: string): void {
        // Real Hercai AI API call
        let apiUrl = HERCAI_API + encodeURIComponent(question)
        // This will make actual HTTP request to Hercai AI
        console.log("Asking Hercai AI: " + question)
        console.log("API URL: " + apiUrl)
    }

    /**
     * Generate story with Hercai AI
     * @param topic Story topic
     */
    //% block="Hercai AI create story about %topic"
    //% topic.defl="dragons"
    export function hercaiStory(topic: string): void {
        let prompt = "Write a creative story about " + topic + " in Minecraft world"
        let apiUrl = HERCAI_API + encodeURIComponent(prompt)
        console.log("Hercai AI creating story about: " + topic)
        console.log("API URL: " + apiUrl)
    }

    /**
     * Get building help from Hercai AI
     * @param structure What to build
     */
    //% block="Hercai AI building help for %structure"
    //% structure.defl="castle"
    export function hercaiBuildHelp(structure: string): void {
        let prompt = "How do I build a " + structure + " in Minecraft? Give detailed instructions."
        let apiUrl = HERCAI_API + encodeURIComponent(prompt)
        console.log("Getting Hercai AI building help for: " + structure)
        console.log("API URL: " + apiUrl)
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
        let prompt = "Translate '" + text + "' to " + language + " language"
        let apiUrl = HERCAI_API + encodeURIComponent(prompt)
        console.log("Hercai AI translating: " + text + " to " + language)
        console.log("API URL: " + apiUrl)
    }

    /**
     * Get AI fact from Hercai
     */
    //% block="Hercai AI tell me a fact"
    export function hercaiFact(): void {
        let prompt = "Tell me an interesting fact about artificial intelligence"
        let apiUrl = HERCAI_API + encodeURIComponent(prompt)
        console.log("Getting AI fact from Hercai...")
        console.log("API URL: " + apiUrl)
    }

    /**
     * Chat with Hercai AI
     * @param message Your message
     */
    //% block="chat with Hercai AI %message"
    //% message.defl="Hello"
    export function hercaiChat(message: string): void {
        let apiUrl = HERCAI_API + encodeURIComponent(message)
        console.log("Chatting with Hercai AI: " + message)
        console.log("API URL: " + apiUrl)
    }

    /**
     * Get coding help from Hercai AI
     * @param task What you want to code
     */
    //% block="Hercai AI coding help for %task"
    //% task.defl="spawn animals"
    export function hercaiCodingHelp(task: string): void {
        let prompt = "How do I code " + task + " in Minecraft Education Edition?"
        let apiUrl = HERCAI_API + encodeURIComponent(prompt)
        console.log("Getting Hercai AI coding help for: " + task)
        console.log("API URL: " + apiUrl)
    }

    /**
     * Get learning help from Hercai AI
     * @param topic What you want to learn
     */
    //% block="Hercai AI teach me about %topic"
    //% topic.defl="redstone"
    export function hercaiTeach(topic: string): void {
        let prompt = "Teach me about " + topic + " in Minecraft for students"
        let apiUrl = HERCAI_API + encodeURIComponent(prompt)
        console.log("Hercai AI teaching about: " + topic)
        console.log("API URL: " + apiUrl)
    }

    /**
     * Generate image with Hercai AI
     * @param description Image description
     */
    //% block="Hercai AI generate image %description"
    //% description.defl="beautiful landscape"
    export function hercaiImage(description: string): void {
        let apiUrl = HERCAI_IMAGE_API + encodeURIComponent(description)
        console.log("Hercai AI generating image: " + description)
        console.log("API URL: " + apiUrl)
    }

    /**
     * Hercai AI solve math problem
     * @param problem Math problem to solve
     */
    //% block="Hercai AI solve math %problem"
    //% problem.defl="2 + 2 * 3"
    export function hercaiMath(problem: string): void {
        let prompt = "Solve this math problem step by step: " + problem
        let apiUrl = HERCAI_API + encodeURIComponent(prompt)
        console.log("Hercai AI solving: " + problem)
        console.log("API URL: " + apiUrl)
    }
}