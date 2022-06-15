const readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let contacts = [
    {
      FirstName: "Ikrame",
      LastName: "AKALMOUS",
      Number: "0101010101"
    },
    {
      FirstName: "Prince",
      LastName: "Joseph",
      Number : "020202020"
    }]

;

    rl.question("Hey Sir I'm your directory !  \nEnter help for display my different command \n\n",(answer) =>{
        if (answer.match('help')) 
        help()
        else console.log('Error \n'), 
        help()
       
    })
    

function help() {
    rl.question("There is the details of different command available \nhelp : this command will show all the commands that is possible to do and explain how they work \n\nstop : This command will close the directory,\n\nadd : This command will allow you to add a new contact inside of your directory \n\nlist : This command will list all the contact present in your directory \n\ndelete : This command will let you erase one contact in your directory\n\n ", answer=>{
        if(answer.match("help")) help()
        else if(answer.match("stop")) stop()
        else if(answer.match("add")) add()
        else if(answer.match("list")) list()
        else if(answer.match("delete")) deleted()
        else console.log('On comprend pas voila le menu \n'), help()
    } )
}


function add() {
    var phone = /^[0][6][0-9]{8}$/;
    console.log('\x1b[36m%s\x1b[0m',"Let's add a new contact !")
    rl.question('What is the first-name of your contact ?\n', function( FirstName ) {
        rl.question('What is the first-name of your contact ?\n' , function(LastName){
            
            rl.question(`What is the phone number of ${FirstName} ${LastName} ?\n`  ,function(Number){
                
                    if (FirstName[0].toUpperCase() === FirstName[0]   && Number.match(phone) &&  LastName[0].toUpperCase() === LastName[0] ) {
                        // Nouvelle ligne
                        const contact = { FirstName: FirstName, LastName: LastName, Number:Number };
        
                        // Ajout de la nouvelle ligne
                        contacts.push(contact);
        
                        // Affichage du nouveau tableau
                        console.log("\x1b[36m%s\x1b[1.5m","Your contact",FirstName + ' '+ LastName, "have benn added succesfully to the directory ! \n")
                        console.log(contacts);
        
                        setTimeout(() => { help() }, 15000);
                    }
                    else{
                        console.log('\x1b[31m%s\x1b[0m','Erreur ! Votre numero de téléphne doit commencer par un 06 et votre nom et prénom doivent commencer par une lettre majuscule \n')
                        add()
                    }
                
                
            })
        })
    })
}

function stop(){
    console.log('\x1b[36m%s\x1b[0m','Good Bye !! \n')
    rl.close();
}

function deleted(){

    contacts.forEach(function(item, index, array) {
        console.log(item, 'ID :', index);
    })
    rl.question('What is the ID of the contact you want to delete \n', function( index ) {
        if (contacts[index]  == undefined) {
            console.log('\x1b[31m%s\x1b[0m',"erreur cet id n'existe pas !!!")
            console.log('\x1b[36m%s\x1b[0m','Voila les id qui existent')
            deleted()
            
            
        }
        else{
            contacts.splice(index, 1)
            console.log('\x1b[32m%s\x1b[0m','Votre contact a été bien supprimé \n')
            console.log('\x1b[36m%s\x1b[0m',"voila la nouvelle liste \n")
            console.log(contacts)
            setTimeout(() => { help() }, 15000);
        }
        

    })

}

function list(){
    console.log('\x1b[36m%s\x1b[0m','Here is the list of your contacts : \n ')
    contacts.forEach(function(item, index, array) {
        console.log('ID :  ==> ' ,index ,item.FirstName, item.LastName, '\n','Phone : ', item.Number, '\n' )
    })
    setTimeout(() => { help() }, 15000);
    
}



 