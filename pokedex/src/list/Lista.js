import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, Image, SafeAreaView, FlatList, View } from "react-native";
import { useNavigation } from '@react-navigation/native'


export default function BaseL() {

  const navigation = useNavigation()

  const [poke, setpoke] = useState([
    {id:1, name: 'Bubasaur', type1: 'Grass', type2: 'Poison', img: 'https://img.pokemondb.net/sprites/black-white/normal/bulbasaur.png',},
    {id:2, name: 'Ivysaur', type1: 'Grass', type2: 'Poison', img: 'https://img.pokemondb.net/sprites/black-white/normal/ivysaur.png',},
    {id:3, name: 'Venosaur', type1: 'Grass', type2: 'Poison', img: 'https://img.pokemondb.net/sprites/black-white/normal/venusaur.png',},
    {id:4, name: 'Charmander', type1: 'Fire', type2: 'Fire', img: 'https://img.pokemondb.net/sprites/black-white/normal/charmander.png',},
    {id:5, name: 'Charmeleon', type1: 'Fire', type2: 'Fire', img: 'https://img.pokemondb.net/sprites/black-white/normal/charmeleon.png',},
    {id:6, name: 'Charizard', type1: 'Fire', type2: 'Flying', img: 'https://img.pokemondb.net/sprites/black-white/normal/charizard.png',},
    {id:7, name: 'Squirtle', type1: 'Water', type2: 'Water', img: 'https://img.pokemondb.net/sprites/black-white/normal/squirtle.png',},
    {id:8, name: 'Wartortle', type1: 'Water', type2: 'Water', img: 'https://img.pokemondb.net/sprites/black-white/normal/wartortle.png',},
    {id:9, name: 'Blastoise', type1: 'Water', type2: 'Water', img: 'https://img.pokemondb.net/sprites/black-white/normal/blastoise.png',},
    {id:10, name: 'Caterpie', type1: 'Bug', type2: 'Bug', img: 'https://img.pokemondb.net/sprites/black-white/normal/caterpie.png',},
    {id:11, name: 'Metapod', type1: 'Bug', type2: 'Bug', img: 'https://img.pokemondb.net/sprites/black-white/normal/metapod.png',},
    {id:12, name: 'Butterfree', type1: 'Bug', type2: 'Flying', img: 'https://img.pokemondb.net/sprites/black-white/normal/butterfree.png',},
    {id:13, name: 'Weedle', type1: 'Bug', type2: 'Poison', img: 'https://img.pokemondb.net/sprites/black-white/normal/weedle.png',},
    {id:14, name: 'Kakuna', type1: 'Bug', type2: 'Poison', img: 'https://img.pokemondb.net/sprites/black-white/normal/kakuna.png',},
    {id:15, name: 'Beedrill', type1: 'Bug', type2: 'Poison', img: 'https://img.pokemondb.net/sprites/black-white/normal/beedrill.png',},
    {id:16, name: 'Pidgey', type1: 'Normal', type2: 'Flying', img: 'https://img.pokemondb.net/sprites/black-white/normal/pidgey.png',},
    {id:17, name: 'Pidgeotto', type1: 'Normal', type2: 'Flying', img: 'https://img.pokemondb.net/sprites/black-white/normal/pidgeotto.png',},
    {id:18, name: 'Pidgeot', type1: 'Normal', type2: 'Flying', img: 'https://img.pokemondb.net/sprites/black-white/normal/pidgeot.png',},
    {id:19, name: 'Rattata', type1: 'Normal', type2: 'Normal', img: 'https://img.pokemondb.net/sprites/black-white/normal/rattata.png',},
    {id:20, name: 'Raticate', type1: 'Normal', type2: 'Normal', img: 'https://img.pokemondb.net/sprites/black-white/normal/raticate.png',},
    {id:21, name: 'Spearow', type1: 'Normal', type2: 'Flying', img: 'https://img.pokemondb.net/sprites/black-white/normal/spearow.png',},
    {id:22, name: 'Fearow', type1: 'Normal', type2: 'Flying', img: 'https://img.pokemondb.net/sprites/black-white/normal/fearow.png',},
    {id:23, name: 'Ekans', type1: 'Poison', type2: 'Poison', img: 'https://img.pokemondb.net/sprites/black-white/normal/ekans.png',},
    {id:24, name: 'Arbok', type1: 'Poison', type2: 'Poison', img: 'https://img.pokemondb.net/sprites/black-white/normal/arbok.png',},
    {id:25, name: 'Pikachu', type1: 'Electric', type2: 'Electric', img: 'https://img.pokemondb.net/sprites/black-white/normal/pikachu.png',},
  ])


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Image style={styles.img} source={require('../../assets/pokeback.jpeg')} />

      <SafeAreaView style={styles.flatview}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={poke}
          renderItem={({ item }) => <Pokemon data={item} />}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    position: 'absolute',
    width:450,
    height:950
  },
  flatview: {
    height: '64%',
    width: '100%',
    alignItems: "center",
  },
  textpoke1: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  textpoke2: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
    paddingBottom: 5,
  },
  textpoke3: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 8,
    paddingTop: 10,
    right: 10
  },
  imgpoke: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  viewprop: {
    borderWidth:5, 
    borderRadius: 30, 
    width: '100%', 
    paddingHorizontal: 20, 
    marginBottom: 10}
});

function Pokemon(props) {
  return (
    <View style={styles.viewprop}>
      <View style={{ flexDirection: 'row',}}>
        <Text style={styles.textpoke1}>#{props.data.id}</Text>
        <Text style={styles.textpoke2}>{props.data.name}</Text>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <Image style={styles.imgpoke} source={{ uri: props.data.img }} />
        <Text style={styles.textpoke3}>{props.data.type1}</Text>
        <Text style={styles.textpoke3}>{props.data.type2}</Text>
      </View>
    </View>
  )
}
