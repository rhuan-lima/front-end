import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import { Header } from '../../components/Header';
import { Loading } from '../../components/Loading';
import { api } from '../../service/api';

import { Container } from './styles';

export const Event = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery('getEvent', async () => {
    const response = await api.get(`/eventos/${id}`);
    return response;
  }, {
    refetchOnWindowFocus: false,
    onError: (error) => {
      if (error.message === 'Network Error') {
        return toast.error('Por favor, inicio o json-server.')
      }
      toast.error('Ocorreu um erro, tente novamente.')
    },
    refetchOnReconnect: false,
  });

  if (isLoading) {
    return <Loading />
  }


  return (
    <Container>
      <Header />
      <section>
        <h2>Evento: {data?.data.nome} - Edições</h2>
        <ul>
          {data?.data.edicoes.map((item, index) => {
            const participantesNovatos = item.participantes.filter(part => part.condicao === 'novato').length;
            const participantesReincidentes = item.participantes.filter(part => part.condicao === 'reincidente').length
            const totalDeParticipantes = item.participantes.length
            const participantesUmaEstrela = item.participantes.filter(part => part.estrelas === 1).length;
            const participantesDuasEstrela = item.participantes.filter(part => part.estrelas === 2).length;
            const participantesTresEstrela = item.participantes.filter(part => part.estrelas === 3).length;
            const parcentualCondition = index !== 0;
            let quedaOuAlta = '';
            if (parcentualCondition) {
              const totalEventoAnterior = data?.data.edicoes[index - 1].participantes.length
              const calculo = (( totalDeParticipantes - totalEventoAnterior) / totalEventoAnterior) * 100; 
              const crescimentoOuQueda = Math.sign(calculo);
              let msgCrescimentoOuQueda = '';
              switch (crescimentoOuQueda) {
                case 1:
                  msgCrescimentoOuQueda = 'O crescimento';
                  break;
                case -1:
                  msgCrescimentoOuQueda = 'Houve uma quedra';
                  break;
                case 0:
                  msgCrescimentoOuQueda = 'A diferença';
                break;
                default: 
                  msgCrescimentoOuQueda = 'O crescimento'
                  break;
              }

               quedaOuAlta = 
                ` ${msgCrescimentoOuQueda} entre a ${index}° e ${index + 1}° 
                  edição foi de: ${calculo.toFixed(1)}%`
            }
          

            
            return (
              <li key={`${item.id}-${item.nome}`}>
                <b>Nome: {item.nome}</b>
                <p>
                  Total de participantes novatos:&nbsp; 
                  {participantesNovatos}
                </p>
                <p>
                  Total de participantes reincidentes:&nbsp; 
                  {participantesReincidentes}
                </p>
                <p>
                  Total de participantes:&nbsp; 
                  {totalDeParticipantes}
                </p>
                <p>
                  Percentual de participantes novatos:&nbsp; 
                  {((participantesNovatos / totalDeParticipantes) * 100).toFixed(1)}%
                </p>
                <p>
                  Percentual de participantes reincidentes:&nbsp; 
                  {((participantesReincidentes / totalDeParticipantes) * 100).toFixed(1)}%
                </p>
                <p>
                  Total de participantes com 1 estrela:&nbsp; 
                  {participantesUmaEstrela}
                </p>
                <p>
                  Total de participantes com 2 estrelas:&nbsp; 
                  {participantesDuasEstrela}
                </p>
                <p>
                  Total de participantes com 3 estrelas:&nbsp; 
                  {participantesTresEstrela}
                </p>
                {parcentualCondition && (
                  <p>
                    {quedaOuAlta}
                  </p>
                )} 
              </li>
            )
          })}
        </ul>
      </section>
    </Container>
  )
}