import * as React from 'react';
import { Avatar, Title, Paragraph } from 'react-native-paper';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';
import { PricingCard, lightColors } from '@rneui/themed';
import { AirbnbRating } from '@rneui/themed';

import Constants from 'expo-constants';
import Base from '../assets/base.webp';
import Corretivo from '../assets/corretivo1.webp';
import Blush from '../assets/blush.webp';
import Rimel from '../assets/rimel1.webp';

export default function Products() {
  return (
    <ScrollView>
      <Card containerStyle={{ backgroundColor: '#402d3a', borderRadius: 10 }}>
        <Card.Title style={{ color: '#fff', fontSize: 16 }}>BASE ALICE ACADEMY</Card.Title>
        <Card.Divider />
        <Card.Image style={{ height: 300, borderRadius: 10 }} source={Base} />
        <AirbnbRating
          defaultRating={4.5}
          count={5}
          isDisabled={true}
          size={20}
        />

        <Text
          style={{
            marginBottom: 20,
            marginTop: 20,
            fontSize: 30,
            fontWeight: 'bold',
            fontFamily: 'Brygada1918_700Bold',
            color: '#fff',
          }}>
          R$ 129,90
        </Text>
        <Text
          style={{
            marginBottom: 20,
            marginTop: 0,
            fontFamily: 'Truculenta_400Regular',
            fontSize: 18,
            color: '#fff',
          }}>
          Possui fórmula de alta cobertura, sendo assim proporciona um
          acabamento uniforme e muito natural à pele, deixando-a impecável ao
          longo do dia. É a base queridinha dos maquiadores e está entre as mais
          vendidas. Tem uma cobertura incrível que chega parecer invisível,
          confortável e com aparência natural mais do que nunca.
          Dermatologicamente testado.
        </Text>
        <Button
          icon={
            <Icon
              name="cart"
              type="ionicon"
              color="#ffffff"
              iconStyle={{ marginRight: 10 }}
            />
          }
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="Comprar"
          color={'#cf7ccd'}
        />
      </Card>
      <Card containerStyle={{ backgroundColor: '#402d3a', borderRadius: 10 }}>
        <Card.Title style={{ color: '#fff', fontSize: 16 }}>
          Rímel- Super Máscara Tint Faces P/ Cílios Natura 12ml
        </Card.Title>
        <Card.Divider />
        <Card.Image style={{ height: 300, borderRadius: 10 }} source={Rimel} />
        <AirbnbRating
          defaultRating={5.5}
          count={5}
          isDisabled={true}
          size={20}
        />

        <Text
          style={{
            marginBottom: 20,
            marginTop: 20,
            fontSize: 30,
            fontWeight: 'bold',
            fontFamily: 'Brygada1918_700Bold',
            color: '#fff',
          }}>
          R$ 39,90
        </Text>
        <Text
          style={{
            marginBottom: 20,
            marginTop: 0,
            fontFamily: 'Truculenta_400Regular',
            fontSize: 18,
            color: '#fff',
          }}>
          Efeitos da máscara para cílios: oferece volume extremo,alongamento
          instantâneo e cílios definidos
        </Text>
        <Text
          style={{
            marginBottom: 20,
            marginTop: 0,
            fontFamily: 'Truculenta_400Regular',
            fontSize: 18,
            color: '#fff',
          }}>
          É à prova d'água: Não
        </Text>
        <Button
          icon={
            <Icon
              name="cart"
              type="ionicon"
              color="#ffffff"
              iconStyle={{ marginRight: 10 }}
            />
          }
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="Comprar"
          color={'#cf7ccd'}
        />
      </Card>
      <Card containerStyle={{ backgroundColor: '#402d3a', borderRadius: 10 }}>
        <Card.Title style={{ color: '#fff', fontSize: 16 }}>
          Corretivo Tracta Líquido Efeito Matte Diversas Cores
        </Card.Title>
        <Card.Divider />
        <Card.Image style={{ height: 300, borderRadius: 10 }} source={Corretivo} />
        <AirbnbRating
          defaultRating={4.5}
          count={5}
          isDisabled={true}
          size={20}
        />

        <Text
          style={{
            marginBottom: 20,
            marginTop: 20,
            fontSize: 30,
            fontWeight: 'bold',
            fontFamily: 'Brygada1918_700Bold',
            color: '#fff',
          }}>
          R$ 27,90
        </Text>
        <Text
          style={{
            marginBottom: 20,
            marginTop: 0,
            fontFamily: 'Truculenta_400Regular',
            fontSize: 18,
            color: '#fff',
          }}>
          O Corretivo Efeito Matte da Tracta é ideal para cobrir e minimizar
          imperfeições da pele como: Olheiras, manchas e espinhas, além de
          disfarçar a oleosidade.
        </Text>
        <Button
          icon={
            <Icon
              name="cart"
              type="ionicon"
              color="#ffffff"
              iconStyle={{ marginRight: 10 }}
            />
          }
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="Comprar"
          color={'#cf7ccd'}
        />
      </Card>
      <Card containerStyle={{ backgroundColor: '#402d3a', borderRadius: 10 }}>
        <Card.Title style={{color: "#fff", fontSize: 16 }}>Frederika Blusher Blush Líquido</Card.Title>
        <Card.Divider />
        <Card.Image style={{ height: 300, borderRadius: 10 }} source={Blush} />
        <AirbnbRating
          defaultRating={5.5}
          count={5}
          isDisabled={true}
          size={20}
        />

        <Text
          style={{
            marginBottom: 20,
            marginTop: 20,
            fontSize: 30,
            fontWeight: 'bold',
            fontFamily: 'Brygada1918_700Bold',
            color: '#fff',
          }}>
          R$ 29,90
        </Text>
        <Text
          style={{
            marginBottom: 20,
            marginTop: 0,
            fontFamily: 'Truculenta_400Regular',
            fontSize: 18,
            color: '#fff',
          }}>
          FDK Blusher é um blush líquido com textura matte, fácil de aplicar e
          esfumar, secagem rápida, alta pigmentação, longa duração e permite
          construir camadas. Fórmula vegana, com esqualano vegetal para hidratar
          enquanto colore. Super versátil, pode ser aplicado como batom, blush
          ou até mesmo sombra.
        </Text>
        <Button
          icon={
            <Icon
              name="cart"
              type="ionicon"
              color="#ffffff"
              iconStyle={{ marginRight: 10 }}
            />
          }
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="Comprar"
          color={'#cf7ccd'}
        />
      </Card>
    </ScrollView>
  );
}
