// FASE DI PREPARAZIONE
// Data
/* contacts = [
  {
    name: 'Michele',
    avatar: './img/avatar_1.png',
    visible: true,
    messages: [
        {
            date: '10/01/2020 15:30:55',
            message: 'Hai portato a spasso il cane?',
            status: 'sent'
        },
        {
            date: '10/01/2020 15:50:00',
            message: 'Ricordati di stendere i panni',
            status: 'sent'
        },
        {
            date: '10/01/2020 16:15:22',
            message: 'Tutto fatto!',
            status: 'received'
        }
    ],
  },
  {
    name: 'Fabio',
    avatar: './img/avatar_2.png',
    visible: true,
    messages: [
        {
            date: '20/03/2020 16:30:00',
            message: 'Ciao come stai?',
            status: 'sent'
        },
        {
            date: '20/03/2020 16:30:55',
            message: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
        },
        {
            date: '20/03/2020 16:35:00',
            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
        }
    ],
  },
  {
    name: 'Samuele',
    avatar: './img/avatar_3.png',
    visible: true,
    messages: [
        {
            date: '28/03/2020 10:10:40',
            message: 'La Marianna va in campagna',
            status: 'received'
        },
        {
            date: '28/03/2020 10:20:10',
            message: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
        },
        {
            date: '28/03/2020 16:15:22',
            message: 'Ah scusa!',
            status: 'received'
        }
    ],
  },
  {
    name: 'Alessandro B.',
    avatar: './img/avatar_4.png',
    visible: true,
    messages: [
        {
            date: '10/01/2020 15:30:55',
            message: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
        },
        {
            date: '10/01/2020 15:50:00',
            message: 'Si, ma preferirei andare al cinema',
            status: 'received'
        }
    ],
  },
  {
    name: 'Alessandro L.',
    avatar: './img/avatar_5.png',
    visible: true,
    messages: [
        {
            date: '10/01/2020 15:30:55',
            message: 'Ricordati di chiamare la nonna',
            status: 'sent'
        },
        {
            date: '10/01/2020 15:50:00',
            message: 'Va bene, stasera la sento',
            status: 'received'
        }
    ],
  },
  {
    name: 'Claudia',
    avatar: './img/avatar_6.png',
    visible: true,
    messages: [
        {
            date: '10/01/2020 15:30:55',
            message: 'Ciao Claudia, hai novità?',
            status: 'sent'
        },
        {
            date: '10/01/2020 15:50:00',
            message: 'Non ancora',
            status: 'received'
        },
        {
            date: '10/01/2020 15:51:00',
            message: 'Nessuna nuova, buona nuova',
            status: 'sent'
        }
    ],
  },
  {
    name: 'Federico',
    avatar: './img/avatar_7.png',
    visible: true,
    messages: [
        {
            date: '10/01/2020 15:30:55',
            message: 'Fai gli auguri a Martina che è il suo compleanno!',
            status: 'sent'
        },
        {
            date: '10/01/2020 15:50:00',
            message: 'Grazie per avermelo ricordato, le scrivo subito!',
            status: 'received'
        }
    ],
  },
  {
    name: 'Davide',
    avatar: './img/avatar_8.png',
    visible: true,
    messages: [
        {
            date: '10/01/2020 15:30:55',
            message: 'Ciao, andiamo a mangiare la pizza stasera?',
            status: 'received'
        },
        {
            date: '10/01/2020 15:50:00',
            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
            status: 'sent'
        },
        {
            date: '10/01/2020 15:51:00',
            message: 'OK!!',
            status: 'received'
        }
    ],
  }
] */


// FASE DI ELABORAZIONE
// Istanza di vue
const { createApp } = Vue

  createApp({
    data() {
      return {
        contacts: [
          {
            name: 'Michele',
            avatar: './img/avatar_1.png',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                }
            ],
          },
          {
            name: 'Fabio',
            avatar: './img/avatar_2.png',
            visible: true,
            messages: [
                {
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                }
            ],
          },
          {
            name: 'Samuele',
            avatar: './img/avatar_3.png',
            visible: true,
            messages: [
                {
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received'
                }
            ],
          },
          {
            name: 'Alessandro B.',
            avatar: './img/avatar_4.png',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
            ],
          },
          {
            name: 'Alessandro L.',
            avatar: './img/avatar_5.png',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Ricordati di chiamare la nonna',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Va bene, stasera la sento',
                    status: 'received'
                }
            ],
          },
          {
            name: 'Claudia',
            avatar: './img/avatar_6.png',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao Claudia, hai novità?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Non ancora',
                    status: 'received'
                },
                {
                    date: '10/01/2020 15:51:00',
                    message: 'Nessuna nuova, buona nuova',
                    status: 'sent'
                }
            ],
          },
          {
            name: 'Federico',
            avatar: './img/avatar_7.png',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Fai gli auguri a Martina che è il suo compleanno!',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Grazie per avermelo ricordato, le scrivo subito!',
                    status: 'received'
                }
            ],
          },
          {
            name: 'Davide',
            avatar: './img/avatar_8.png',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao, andiamo a mangiare la pizza stasera?',
                    status: 'received'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:51:00',
                    message: 'OK!!',
                    status: 'received'
                }
            ],
          }
        ],
        currentChatIndex: 0,
        inputMessage: '',
        searchedName: '',
      }
    },
    computed: {
      isUserSearching () {
        return this.searchedName ? true : false
      },
      searchedContacts () {
        // Verifica se l'utente non sta cercando
        if (!this.isUserSearching) return undefined
        // Crea un nuovo array di oggetti con i soli contatti cercati con il metodo filter
        const filteredContacts = this.contacts.reduce((accumulator, contact, contactIndex) => {
          // Costruisce una costante in cui inserire il nome di contatto attualmente considerato grazie ai parametri di filter
          const comparedString = contact.name.slice(0, this.searchedName.length).toLowerCase();
          // Compara il nome ricercato con quello nell'array di contatti senza tenere conto delle maiuscole, è sensibile però allo spazio tra nome e cognome
          if (comparedString == this.searchedName.toLowerCase()) {
            contact.chatIndex = contactIndex;
            accumulator.push(contact);
            console.log(accumulator);            
          }
          return accumulator;
        }, []);
        // Valida il risultato della ricerca al fine di restituire un array con i nomi desiderati o uno vuoto
        console.log(filteredContacts);
        if (filteredContacts.length) {
          // Setta il 'currentChatIndex' a 0, per rendere possibile renderizzazione della prima chat trovata che può essere anche la sola
          this.currentChatIndex = 0;
          return filteredContacts;
        }
        return undefined;
      },
      contactsToShow () {
        return !this.isUserSearching ? this.contacts : this.searchedContacts;
      }, 
    },
    methods: {
      getLastMessage (contactMessages) {
        return contactMessages[contactMessages.length - 1];
      },
      getMessages (contactObj) {
        return contactObj.messages;
      },
      getMessageDate (contactMessage) {
        return contactMessage.date.substring(11, 16);
      },
      setCurrentChatIndex (chatIndex) {
        this.currentChatIndex = chatIndex;
      },
      // Funzione di creazione di un oggetto messaggio con tre proprietà date in input
      newMessage: (date, message, status) => newObjMessage = {date, message, status},
      // Funzione di aggiunta del messaggio per quando richiamerà setTimeout()
      addMessage (msg) {
        if (!this.isUserSearching) this.contacts[this.currentChatIndex].messages.push(msg);
        else {
          const {chatIndex} = this.contactsToShow[this.currentChatIndex]
          this.contacts[chatIndex].messages.push(msg);
        }
        console.log(msg.date + ', ' + msg.message);
      },
      // Funzione che permette di ottenere una stringa con ora e minuti separati da un due punti a partire da un oggetto Date()
      stampTime: dateObj => dateObj.toLocaleString().split(', ').join(' '),
      // Funzione per l'invio del messaggio dall'input in chat
      sendMessage () {
        // Recupera il tempo all'interno di una stringa nel formato del prorpio computer
        const d = this.stampTime(new Date());
        // Crea un oggetto con proprietà uguali a quelle degli oggetti degli array 'messages' per memorizzare i dati sul nuovo messaggio inviato dall'utente
        const newMessage = this.newMessage(d, this.inputMessage, 'sent');
        // Inserisce l'oggetto appena creato nel'array 'messages' della chat corrente
        this.addMessage(newMessage);
        // Pulizia campo del messaggio
        this.inputMessage = '';
      },
      // Funzione che crea un messaggio automatico ritardato rispetto all'invio dalla persona con cui si è in chat
      automaticContactReply (newReceivedMessage) {
        // Creo un oggetto idoneo in cui salvare tutti i dati sul messaggio in input da inviare
        const newMessage = this.newMessage('', newReceivedMessage, 'received');
        // Ritarda la creazione del messaggio in automatico di un certo tempo grazie a setTimeout() e lo inserisce nel corretto array 'messages'
        const delay = setTimeout(() => {
          // Registra il tempo a cui è stato effettuato l'invio e lo inserisce nella proprietà apposita dell'oggetto creato all'inizio
          const d = this.stampTime(new Date());
          newMessage.date = d;
          // Aggiunge il nuovo messaggio all'array dei messaggi della chat corrente per mezzo della funzione di aggiunta di messaggio
          this.addMessage(newMessage);
          console.log('Messaggio inserito');
        }, 1000);
      },
    }
  }).mount('#app')