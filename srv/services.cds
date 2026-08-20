using chatbot.messages as messages from '../db/schema';

service ChatbotService {
    entity AIMessage as projection on messages.AIMessage;
}