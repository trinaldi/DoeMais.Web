import DonationCardList from "../components/Donation/DonationCardList.tsx";
import type { Donation } from "../components/Donation/DonationCard.tsx";
import { Box, Container } from "@mui/material";

const donations: Donation[] = [
    {
        title: "Colchão de Solteiro",
        description:
            "Colchão de solteiro com tamanho 78cm, já bem usado, porém em boas condições.",
        quantity: 1,
        status: "Aprovado",
        category: "Moveis",
        pickupAddress: {
            street: "Rua dos Bobos, 0",
            complement: "apartamento 22",
            city: "Xique Xique",
            state: "BA",
            zipCode: "14026590",
        },
        images: [
            "https://reconflex.vteximg.com.br/arquivos/ids/157239-1000-655/D33-MAX-Saude-Premium-colchao-88-20-RECONFLEX.png?v=638028393002030000",
            "https://reconflex.vteximg.com.br/arquivos/ids/157240-600-393/D33-MAX-Saude-Premium-detalhe-RECONFLEX.jpg?v=638028393277270000",
            "https://reconflex.vteximg.com.br/arquivos/ids/157241-600-393/D33-Max-Saude-Premium-detalhe-tecido-RECONFLEX.jpg?v=638028393440600000",
        ],
    },
    {
        title: "Cadeira de Escritório",
        description:
            "Cadeira ergonômica preta com ajustes, perfeita para home office.",
        quantity: 2,
        status: "Pendente",
        category: "Moveis",
        pickupAddress: {
            street: "Av. Central, 123",
            complement: "Sala 5",
            city: "Salvador",
            state: "BA",
            zipCode: "40010020",
        },
        images: [
            "https://reconflex.vteximg.com.br/arquivos/ids/157239-1000-655/D33-MAX-Saude-Premium-colchao-88-20-RECONFLEX.png?v=638028393002030000",
            "https://reconflex.vteximg.com.br/arquivos/ids/157240-600-393/D33-MAX-Saude-Premium-detalhe-RECONFLEX.jpg?v=638028393277270000",
            "https://reconflex.vteximg.com.br/arquivos/ids/157241-600-393/D33-Max-Saude-Premium-detalhe-tecido-RECONFLEX.jpg?v=638028393440600000",
        ],
    },
    {
        title: "Mesa de Jantar",
        description:
            "Mesa retangular de madeira com seis cadeiras, bom estado geral.",
        quantity: 1,
        status: "Aprovado",
        category: "Moveis",
        pickupAddress: {
            street: "Rua das Flores, 45",
            complement: "",
            city: "Feira de Santana",
            state: "BA",
            zipCode: "44015030",
        },
        images: [
            "https://reconflex.vteximg.com.br/arquivos/ids/157239-1000-655/D33-MAX-Saude-Premium-colchao-88-20-RECONFLEX.png?v=638028393002030000",
            "https://reconflex.vteximg.com.br/arquivos/ids/157240-600-393/D33-MAX-Saude-Premium-detalhe-RECONFLEX.jpg?v=638028393277270000",
            "https://reconflex.vteximg.com.br/arquivos/ids/157241-600-393/D33-Max-Saude-Premium-detalhe-tecido-RECONFLEX.jpg?v=638028393440600000",
        ],
    },
    {
        title: "Sofá 3 Lugares",
        description:
            "Sofá confortável, estofado em tecido cinza, poucas marcas de uso.",
        quantity: 1,
        status: "Rejeitado",
        category: "Moveis",
        pickupAddress: {
            street: "Alameda dos Anjos, 789",
            complement: "Casa",
            city: "Ilhéus",
            state: "BA",
            zipCode: "45670000",
        },
        images: [
            "https://reconflex.vteximg.com.br/arquivos/ids/157239-1000-655/D33-MAX-Saude-Premium-colchao-88-20-RECONFLEX.png?v=638028393002030000",
            "https://reconflex.vteximg.com.br/arquivos/ids/157240-600-393/D33-MAX-Saude-Premium-detalhe-RECONFLEX.jpg?v=638028393277270000",
            "https://reconflex.vteximg.com.br/arquivos/ids/157241-600-393/D33-Max-Saude-Premium-detalhe-tecido-RECONFLEX.jpg?v=638028393440600000",
        ],
    },
    {
        title: "Geladeira Duplex",
        description:
            "Geladeira branca, duas portas, funcionando perfeitamente.",
        quantity: 1,
        status: "Aprovado",
        category: "Eletrodomésticos",
        pickupAddress: {
            street: "Rua da Praia, 101",
            complement: "Apto 302",
            city: "Camaçari",
            state: "BA",
            zipCode: "42800000",
        },
        images: [
            "https://reconflex.vteximg.com.br/arquivos/ids/157239-1000-655/D33-MAX-Saude-Premium-colchao-88-20-RECONFLEX.png?v=638028393002030000",
            "https://reconflex.vteximg.com.br/arquivos/ids/157240-600-393/D33-MAX-Saude-Premium-detalhe-RECONFLEX.jpg?v=638028393277270000",
            "https://reconflex.vteximg.com.br/arquivos/ids/157241-600-393/D33-Max-Saude-Premium-detalhe-tecido-RECONFLEX.jpg?v=638028393440600000",
        ],
    },
    {
        title: "Fogão 4 Bocas",
        description: "Fogão em bom estado, gás natural, forno funcionando.",
        quantity: 1,
        status: "Pendente",
        category: "Eletrodomésticos",
        pickupAddress: {
            street: "Av. Brasil, 500",
            complement: "",
            city: "Juazeiro",
            state: "BA",
            zipCode: "48900000",
        },
        images: [
            "https://reconflex.vteximg.com.br/arquivos/ids/157239-1000-655/D33-MAX-Saude-Premium-colchao-88-20-RECONFLEX.png?v=638028393002030000",
            "https://reconflex.vteximg.com.br/arquivos/ids/157240-600-393/D33-MAX-Saude-Premium-detalhe-RECONFLEX.jpg?v=638028393277270000",
            "https://reconflex.vteximg.com.br/arquivos/ids/157241-600-393/D33-Max-Saude-Premium-detalhe-tecido-RECONFLEX.jpg?v=638028393440600000",
        ],
    },
    {
        title: "Bike Urbana",
        description:
            "Bicicleta urbana, aro 26, freios a disco, ideal para cidade.",
        quantity: 1,
        status: "Aprovado",
        category: "Esportes",
        pickupAddress: {
            street: "Rua das Palmeiras, 78",
            complement: "",
            city: "Barreiras",
            state: "BA",
            zipCode: "47800000",
        },
        images: [
            "https://reconflex.vteximg.com.br/arquivos/ids/157239-1000-655/D33-MAX-Saude-Premium-colchao-88-20-RECONFLEX.png?v=638028393002030000",
            "https://reconflex.vteximg.com.br/arquivos/ids/157240-600-393/D33-MAX-Saude-Premium-detalhe-RECONFLEX.jpg?v=638028393277270000",
            "https://reconflex.vteximg.com.br/arquivos/ids/157241-600-393/D33-Max-Saude-Premium-detalhe-tecido-RECONFLEX.jpg?v=638028393440600000",
        ],
    },
    {
        title: "Tênis Infantil",
        description: "Tênis usado por criança, tamanho 30, em bom estado.",
        quantity: 3,
        status: "Pendente",
        category: "Roupas",
        pickupAddress: {
            street: "Travessa das Acácias, 12",
            complement: "",
            city: "Jequié",
            state: "BA",
            zipCode: "45200000",
        },
        images: [
            "https://reconflex.vteximg.com.br/arquivos/ids/157239-1000-655/D33-MAX-Saude-Premium-colchao-88-20-RECONFLEX.png?v=638028393002030000",
            "https://reconflex.vteximg.com.br/arquivos/ids/157240-600-393/D33-MAX-Saude-Premium-detalhe-RECONFLEX.jpg?v=638028393277270000",
            "https://reconflex.vteximg.com.br/arquivos/ids/157241-600-393/D33-Max-Saude-Premium-detalhe-tecido-RECONFLEX.jpg?v=638028393440600000",
        ],
    },
    {
        title: "Livro de Receitas",
        description: "Livro antigo com receitas diversas, capa dura, usado.",
        quantity: 5,
        status: "Aprovado",
        category: "Livros",
        pickupAddress: {
            street: "Rua das Laranjeiras, 60",
            complement: "Casa",
            city: "Vitória da Conquista",
            state: "BA",
            zipCode: "45000000",
        },
        images: [
            "https://reconflex.vteximg.com.br/arquivos/ids/157239-1000-655/D33-MAX-Saude-Premium-colchao-88-20-RECONFLEX.png?v=638028393002030000",
            "https://reconflex.vteximg.com.br/arquivos/ids/157240-600-393/D33-MAX-Saude-Premium-detalhe-RECONFLEX.jpg?v=638028393277270000",
            "https://reconflex.vteximg.com.br/arquivos/ids/157241-600-393/D33-Max-Saude-Premium-detalhe-tecido-RECONFLEX.jpg?v=638028393440600000",
        ],
    },
    {
        title: "Tablet Samsung",
        description: "Tablet em bom estado, tela touch com leve arranhado.",
        quantity: 1,
        status: "Rejeitado",
        category: "Eletrônicos",
        pickupAddress: {
            street: "Av. das Nações, 300",
            complement: "Apto. 101",
            city: "Barreiras",
            state: "BA",
            zipCode: "47800000",
        },
        images: [
            "https://reconflex.vteximg.com.br/arquivos/ids/157239-1000-655/D33-MAX-Saude-Premium-colchao-88-20-RECONFLEX.png?v=638028393002030000",
            "https://reconflex.vteximg.com.br/arquivos/ids/157240-600-393/D33-MAX-Saude-Premium-detalhe-RECONFLEX.jpg?v=638028393277270000",
            "https://reconflex.vteximg.com.br/arquivos/ids/157241-600-393/D33-Max-Saude-Premium-detalhe-tecido-RECONFLEX.jpg?v=638028393440600000",
        ],
    },
    {
        title: "Cama de Casal",
        description: "Cama de casal com estrado, bom estado, sem colchão.",
        quantity: 1,
        status: "Aprovado",
        category: "Moveis",
        pickupAddress: {
            street: "Rua do Sol, 500",
            complement: "",
            city: "Itabuna",
            state: "BA",
            zipCode: "45600000",
        },
        images: [
            "https://reconflex.vteximg.com.br/arquivos/ids/157239-1000-655/D33-MAX-Saude-Premium-colchao-88-20-RECONFLEX.png?v=638028393002030000",
            "https://reconflex.vteximg.com.br/arquivos/ids/157240-600-393/D33-MAX-Saude-Premium-detalhe-RECONFLEX.jpg?v=638028393277270000",
            "https://reconflex.vteximg.com.br/arquivos/ids/157241-600-393/D33-Max-Saude-Premium-detalhe-tecido-RECONFLEX.jpg?v=638028393440600000",
        ],
    },
];

export interface DonationCardListProps {
    donations: Donation[];
}

function DashboardPage() {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
            }}
        >
            <Container maxWidth="lg">
                <DonationCardList donations={donations} />
            </Container>
        </Box>
    );
}
export default DashboardPage;
