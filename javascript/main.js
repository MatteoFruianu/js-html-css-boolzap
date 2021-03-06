/**
 * Boolzapp Vue
 */
var app = new Vue({
    el: '#app',
    data: {
        // nostro account
        user: {
            name: 'Nome Utente',
            avatar: '_io'
        },

        indexContact: 0,

        newMessage: ' ',

        
        // Elenco contatti
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
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
                avatar: '_2',
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
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
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
                name: 'Luisa',
                avatar: '_4',
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
                name: 'Roberto',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Stasera calcetto alle 20?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ok, ci sono!',
                        status: 'received'
                    }
                ],
            },

            {
                name: 'Gianni',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Come si chiama il film che abbiamo visto domenica scorsa?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Sorry we missed you',
                        status: 'received'
                    }
                ],
            },

            {
                name: 'Antonio',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai fatto gli esercizi?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si ma non tutti',
                        status: 'received'
                    }
                ],
            },

            {
                name: 'Luca',
                avatar: '_8',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Il cantiere procede bene?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Dobbiamo intonacare!',
                        status: 'received'
                    }
                ],
            },
            
        ]
    },
    methods: {

        setContact(index) {
            this.indexContact = index
        },

         addNewMessage() {

            const activeMessage = this.contacts[this.indexContact].messages;

        if (this.newMessage.trim() !== '') {

            

            activeMessage.push({
                message: this.newMessage, 
                date: dayjs().format('DD/MM/YYYY HH:mm:ss'), 
                status: 'sent'});

        }  

        setTimeout(() => { 
            activeMessage.push({
                message: 'ok', 
                date: dayjs().format('DD/MM/YYYY HH:mm:ss'), 
                status: 'received'});
         }, 1000);


        this.newMessage = '';
   
    },


    }
});