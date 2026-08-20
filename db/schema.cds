namespace chatbot.messages;

entity AIMessage
{
    key ID : UUID;
    question : String(100);
    response : String(100);
}

     