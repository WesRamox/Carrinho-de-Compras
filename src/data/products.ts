interface ProductData {
  id: number
  name: string
  description: string
  price: number
  image: string
  quantity: number
}

const products: ProductData[] =  [
    {
        id: 1,
        name: "Fone de Ouvido Bluetooth",
        description: "Fone de ouvido sem fio com cancelamento de ruído e bateria de longa duração.",
        price: 199.99,
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTHiEYsu_OqnYGS71FYgEg5wj_an5jcS7AEIMKsPUJputsHbg9ndq2fSM8t4jp7i78hMj8Diu6gMdhhZN-Iw5znZwNDbIclXPnUW-lv6rUtxRIwzSsQlYPD&usqp=CAE",
        quantity: 0
    },
    {
        id: 2,
        name: "Teclado Mecânico RGB",
        description: "Teclado mecânico com iluminação RGB personalizável e teclas programáveis.",
        price: 299.99,
        image: "https://www.syma.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/3/4/34529.jpg",
        quantity: 0
    },
    {
        id: 3,
        name: "Smartwatch",
        description: "Relógio inteligente com monitoramento de atividades, batimentos cardíacos e notificações.",
        price: 149.99,
        image: "https://i5.walmartimages.com/asr/dda6bc1f-d282-4cf9-ad29-e827222bc4d5.8d402328f4d54e2b9a252879ec51fb79.jpeg",
        quantity: 0
    },
    {
        id: 4,
        name: "Mochila Anti-Furto",
        description: "Mochila com design anti-furto, compartimento para laptop e porta USB.",
        price: 89.99,
        image: "https://brindeshop.com.br/10874-large_default/mochila-anti-furto-mc240.jpg",
        quantity: 0
    },
    {
        id: 5,
        name: "Mouse Gamer",
        description: "Mouse gamer com alta precisão, botões programáveis e iluminação LED.",
        price: 79.99,
        image: "https://aocstore.vtexassets.com/arquivos/ids/158657-800-800?v=638278206409270000&width=800&height=800&aspect=true",
        quantity: 0
    }
];

export default products