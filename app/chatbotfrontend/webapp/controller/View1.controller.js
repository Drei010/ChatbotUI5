sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("chatbotfrontend.controller.View1", {
        onInit() {
        },
        onSendMessage: function(oEvent) {
            const oInput = this.byId("messageInput");
            const sMessage = oInput.getValue();

            if (!sMessage) {
                return;
            }

            // Clear the input field
            oInput.setValue("");

            // Send the message to the backend and create an AIMessage record
                // Create the AIMessage record using the OData V4 list binding
                const oList = this.byId("messageList");
                const oListBinding = oList.getBinding("items");

                if (oListBinding && oListBinding.create) {
                    try {
                        // This creates the entry on the server and updates the list binding automatically
                        oListBinding.create({ question: sMessage });
                        console.log("Create request sent via OData V4 list binding");
                    } catch (err) {
                        console.error("Error creating AIMessage via binding:", err);
                    }
                } else {
                    // Fallback: use fetch to the OData endpoint
                    fetch("/odata/v4/chatbot/AIMessage", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ question: sMessage })
                    })
                    .then(response => { if (!response.ok) throw new Error(response.statusText); return response.json(); })
                    .then(data => console.log("Message saved to DB (fallback):", data))
                    .catch(error => console.error("Error saving message (fallback):", error));
                }
        }
    });
});