
var i = 1; 

let app = new Vue({
    el:'#app',
    data() {
        return{
            nombre: "Cajera",
            tipoIngredientes: null,
            ingredientes: null,
            contadorMas: null
            // nombre: "Kevin",
            // categorias: ["carnes", "verduras", "condimentos", "extras", "embutidos"]
            
        };
    },
    mounted(){
        this.getIngredientes();
        this.getTipoIngredientes();
    },
    methods:{
        getIngredientes(){
            axios
            .get('https://arcane-hollows-85087.herokuapp.com/api-logeo/Ingredientes')
                .then( response => {
                    this.ingredientes = response.data

                    // console.log(response.data)

                    // this.tipo = response.data.lenght.tipo.nombre
                    // // console.log(response.data)

                    // this.tipo = () => {for(const i = 0; i < response.data.length; i++) {
                    //     return response.data[i].tipo.nombre;  // (o el campo que necesites)
                    // }}
                    // console.log(this.tipo(0))
                })
                .catch(e => console.log(e))
        },
        getTipoIngredientes(){
            axios
            .get('https://arcane-hollows-85087.herokuapp.com/api-logeo/TipoIngredientes')
                .then( response => {
                    this.tipoIngredientes = response.data

                    // console.log(response.data)

                    // this.tipo = response.data.lenght.tipo.nombre
                    // // console.log(response.data)

                    // this.tipo = () => {for(const i = 0; i < response.data.length; i++) {
                    //     return response.data[i].tipo.nombre;  // (o el campo que necesites)
                    // }}
                    // console.log(this.tipo(0))
                })
                .catch(e => console.log(e))
        }
    }
})
 
function contadormas(){ 
    i = i + 1; 
    var cant = document.getElementById("cantidad"); 
    cant.value = i;
    if(cant.value == 1){
            i=1;
            cant.value=1;
    }
}

function contadormenos(){ 
    if(i>=2){
        i = i - 1; 
        var cant = document.getElementById("cantidad"); 
        cant.value = i;
        if(cant.value == 1){
            i=1;
            cant.value=1;
        }
    }
}

names = document.getElementById('nombre')
let name = app.nombre
names.innerText = name;

let btnHamburguesa = document.getElementById("crearHamburguesa"),
containerHamburguesa = document.getElementById("containerCrearHamburguesa"),
armaHamburguesa = document.getElementById("app"),
carritoImg = document.getElementById('carritoImg')

btnHamburguesa.addEventListener("click",()=>{

if (containerHamburguesa.classList.contains("esconder")){
    containerHamburguesa.classList.remove("esconder");
    setTimeout(function () {
        containerHamburguesa.remove("verEscondite");
        
    }, 10);
} else {
    containerHamburguesa.classList.add("verEscondite");
    containerHamburguesa.addEventListener("transitionend",function(e){
    containerHamburguesa.classList.add("esconder");
    },{
        
    });
}
    setTimeout(() => {
        armaHamburguesa.style.display="block";
        carritoImg.style.display='block'
    }, 500);


},);