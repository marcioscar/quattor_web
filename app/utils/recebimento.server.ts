const EVO_AUTH = process.env.NEXT_PUBLIC_EVO_AUTH;

export const getVendas = async () => {
  try {
    const vendas = await fetch(
      `https://evo-integracao.w12app.com.br/api/v1/sales?receivingDateStart=2023-01-30&receivingDateEnd=2023-01-30
      `,

      {
        method: "GET",
        headers: {
          Authorization: "Basic " + btoa(EVO_AUTH as string),
        },
      }
    );

   
     return vendas.json();
  } catch (error) {
    throw error;
  }
};
