import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Header } from '../../components/Header';
import { Loading } from '../../components/Loading';
import { api } from '../../service/api';
import { Container } from './styles';


export const Dashboard = () => {


  const { data, isLoading } = useQuery('getEvents', async () => {
    const response = await api.get('/eventos');
    return response;
  }, {
    refetchOnWindowFocus: false,
    onError: () => {
      toast.error('Ocorreu um erro, tente novamente.')
    },
  });

  if (isLoading) {
    return <Loading />
  }

  return (
    <Container>
      <Header />
      <section>
        <h2>Eventos:</h2>
        <ul>
        {data?.data.map(item => (
          <li key={`${item.id}-${item.nome}`}>
            <Link to={`/evento/${item.id}`}>
              <b>{item.nome}</b>
              <p>Total de edições: {item.edicoes.length}</p>
            </Link>
          </li>
        ))}
        </ul>
      </section>
    </Container >
  );
}
