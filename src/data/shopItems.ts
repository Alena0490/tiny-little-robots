import { lazy } from 'react'
// MODELS
const CatModel  = lazy(() => import('../components/models/CatModel'))
const RoundCat  = lazy(() => import('../components/models/RoundCat'))
const DinoModel = lazy(() => import('../components/models/DinoModel'))
const DogModel  = lazy(() => import('../components/models/DogModel'))
const ShibaModel  = lazy(() => import('../components/models/ShibaModel'))
const RamboModel  = lazy(() => import('../components/models/RamboModel'))
const NemoModel   = lazy(() => import('../components/models/NemoModel'))
const PinguiModel = lazy(() => import('../components/models/PinguiModel'))
const SpiderModel = lazy(() => import('../components/models/SpiderModel'))

//IMAGES
import kitty from '../img/kitty.png'
import kittMini from '../img/kittyMini.png'
import dino from '../img/dino.png'
import dog from '../img/dog.png'
import shiba from '../img/shiba.png'
import rambo from '../img/rambo.png'
import nemo from '../img/nemo.png'
import pingui from '../img/pingui.png'
import spider from '../img/spider.png'

const shopItems = [
    {
        id: 1,
        name: 'Kitty-X2',
        description: 'Agile companion unit',
        model: CatModel,
        img: kitty,
        alt: 'Robotic cat with skeletal frame',
        price: 2000,
        imgUrl: 'https://raw.githubusercontent.com/Alena0490/Glow-menu-parallax/main/src/img/kitty.png',
        url: 'https://sketchfab.com/3d-models/robotic-cat-3fb895c3c5e04d67916213176611fbba',
    },
    {
        id: 2,
        name: 'Kitty Mini DLX',
        description: 'Compact with digital display',
        model: RoundCat,
        img: kittMini,
        alt: 'Round grey robotic cat with digital eye display',
        price: 2500,
          imgUrl: 'https://raw.githubusercontent.com/Alena0490/Glow-menu-parallax/main/src/img/kittyMini.png',
        url: 'https://sketchfab.com/3d-models/robo-round-cat-astronaut-ccbb30aab1e64cd0bd8ccdf2ffe5cdca'
    },
    {
        id: 3,
        name: 'Rex-15',
        description: 'Prehistoric power core',
        model: DinoModel,
        img: dino,
        alt: 'Blue robotic dinosaur',
        price: 1500,
        imgUrl: 'https://raw.githubusercontent.com/Alena0490/Glow-menu-parallax/main/src/img/dino.png',
        url: 'https://sketchfab.com/3d-models/robot-dinosaur-toy-8ce1a6e5ce4d43ada896ee8f2d4ab289'
    },
    {
        id: 4,
        name: 'K9 Classic',
        description: 'Loyal all-terrain unit',
        model: DogModel,
        img: dog,
        alt: 'Silver robotic dog with blue glowing eyes',
        price: 1800,
        imgUrl: 'https://raw.githubusercontent.com/Alena0490/Glow-menu-parallax/main/src/img/dog.png',
        url: 'https://sketchfab.com/3d-models/robo-dog-69389a4744dd400b97de02c861834d45'
    },
    {
        id: 5,
        name: 'Shiba-7',
        description: 'Premium social companion',
        model: ShibaModel,
        img: shiba,
        alt: 'Grey robotic shiba inu with bow tie and bright pink accents',
        price: 2800,
        imgUrl: 'https://raw.githubusercontent.com/Alena0490/Glow-menu-parallax/main/src/img/shiba.png',
        url: 'https://sketchfab.com/3d-models/robo-shiba-b4215f3c452c4e7cbe845b56251d2877'
    },
     {
        id: 6,
        name: 'Rambo XXL',
        description: 'Heavy-duty security unit',
        model: RamboModel,
        img: rambo,
        alt: 'Large black robotic guard dog with red eyes',
        price: 3800,
        imgUrl: 'https://raw.githubusercontent.com/Alena0490/Glow-menu-parallax/main/src/img/rambo.png',
        url: 'https://sketchfab.com/3d-models/futuristic-robotic-guard-dog-6569f6519be04959a05e3f021e5e4217'
    },
    {
        id: 7,
        name: 'Nemo-R1',
        description: 'Aquatic recon unit',
        model: NemoModel,
        img: nemo,
        alt: 'Red robotic fish with mechanical fins',
        price: 800,
        imgUrl: 'https://raw.githubusercontent.com/Alena0490/Glow-menu-parallax/main/src/img/nemo.png',
        url: 'https://sketchfab.com/3d-models/robotic-fish-b4362fb28c7a4b0e83638bb6388c23a8'
    },
          {
            id: 8,
            name: 'Pingu Drill',
            description: 'Arctic ops specialist',
            model: PinguiModel,
            img: pingui,
            alt: 'Black robotic penguin with antenna and drill nose',
            price: 900,
            imgUrl: 'https://raw.githubusercontent.com/Alena0490/Glow-menu-parallax/main/src/img/pingui.png',
            url: 'https://sketchfab.com/3d-models/weathered-penguin-bot-33afc2b450dd4c188b307c82f3b2cbc3#download'
        },
        {
            id: 9,
            name: 'Web Crawler 3.0',
            description: 'Multi-limb tactical unit',
            model: SpiderModel,
            img: spider,
            alt: 'Pink robotic spider with metal claws',
            price: 1200,
            imgUrl: 'https://raw.githubusercontent.com/Alena0490/Glow-menu-parallax/main/src/img/spider.png',
            url: 'https://sketchfab.com/3d-models/robotic-spider-ee587d7dabed49e1906ac5035b502899'
        }
]

export default shopItems