import aragornImg from "../assets/aragorn.jpg";
import frodoImg from "../assets/frodo.jpg";
import owenImg from "../assets/owen.jpg";
import gigantosaurusImg from "../assets/gigantosaurus.png";

const productos = [
    {title:"Aragorn", id:0, category:"The lord of the rings", description:"Funko-Pop Original de Aragorn" ,stock:5, price:7000, image: {aragornImg}},
    {title:"Frodo", id:1, category:"The lord of the rings", description:"Funko-Pop Original de Frodo" ,stock:10, price:8000, image: {frodoImg}},
    {title:"Owen", id:2, category:"Jurassic world", description:"Funko-Pop Original de Owen" ,stock:10, price:7000, image: {owenImg}},
    {title:"Gigantosaurus", id:3, category:"Jurassic world", description:"Funko-Pop Original del Gigantosaurus" ,stock:2, price:12000, image: {gigantosaurusImg}},
  ];

export default productos;