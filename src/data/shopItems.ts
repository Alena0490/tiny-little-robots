import CatModel from "../components/models/CatModel"
import RoundCat from "../components/models/RoundCat"
import DinoModel from "../components/models/DinoModel"
import DogModel from "../components/models/DogModel"
import ShibaModel from "../components/models/ShibaModel"
import RamboModel from "../components/models/RamboModel"
import NemoModel from "../components/models/NemoModel"
import PinguiModel from "../components/models/PinguiModel"
import SpiderModel from "../components/models/SpiderModel"

const shopItems = [
    {
        id: 1,
        name: "Kitty 2.0",
        description: "",
        model: CatModel,
        price: 2000,
        url: 'https://sketchfab.com/3d-models/robotic-cat-3fb895c3c5e04d67916213176611fbba'
    },
    {
        id: 2,
        name: "Kitty Mini Deluxe",
        description: "",
        model: RoundCat,
        price: 2500,
        url: 'https://sketchfab.com/3d-models/robo-round-cat-astronaut-ccbb30aab1e64cd0bd8ccdf2ffe5cdca'
    },
    {
        id: 3,
        name: "Dino",
        description: "",
        model: DinoModel,
        price: 1500,
        url: 'https://sketchfab.com/3d-models/robot-dinosaur-toy-8ce1a6e5ce4d43ada896ee8f2d4ab289'
    },
    {
        id: 4,
        name: "Dog Classic",
        description: "",
        model: DogModel,
        price: 1800,
        url: 'https://sketchfab.com/3d-models/robo-dog-69389a4744dd400b97de02c861834d45'
    },
    {
        id: 5,
        name: "Shiba",
        description: "",
        model: ShibaModel,
        price: 2800,
        url: 'https://sketchfab.com/3d-models/robo-shiba-b4215f3c452c4e7cbe845b56251d2877'
    },
     {
        id: 6,
        name: "Rambo XXL",
        description: "",
        model: RamboModel,
        price: 3800,
        url: 'https://sketchfab.com/3d-models/futuristic-robotic-guard-dog-6569f6519be04959a05e3f021e5e4217'
    },
    {
        id: 7,
        name: "Nemo",
        description: "",
        model: NemoModel,
        price: 800,
        url: 'https://sketchfab.com/3d-models/robotic-fish-b4362fb28c7a4b0e83638bb6388c23a8'
    },
          {
            id: 8,
            name: "Pingui",
            description: "",
            model: PinguiModel,
            price: 900,
            url: 'https://sketchfab.com/3d-models/weathered-penguin-bot-33afc2b450dd4c188b307c82f3b2cbc3#download'
        },
        {
            id: 9,
            name: "Web Crawler 3.0",
            description: "",
            model: SpiderModel,
            price: 1200,
            url: 'https://sketchfab.com/3d-models/robotic-spider-ee587d7dabed49e1906ac5035b502899'
        }
]

export default shopItems