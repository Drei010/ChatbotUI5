const cds = require('@sap/cds')

module.exports = class ChatbotService extends cds.ApplicationService { init() {

  const { AIMessage } = cds.entities('ChatbotService')

  this.before (['CREATE', 'UPDATE'], AIMessage, async (req) => {
    console.log('Before CREATE/UPDATE AIMessage', req.data)
  })

  
  this.after ('READ', AIMessage, async (aIMessage, req) => {
    console.log('After READ AIMessage', aIMessage)
  })


  return super.init()
}}
