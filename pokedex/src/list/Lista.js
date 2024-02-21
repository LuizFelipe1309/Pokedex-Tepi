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
    {id:26, name: 'Raichu', type1: 'Electric', type2: 'Electric', img: 'https://img.pokemondb.net/sprites/black-white/normal/raichu.png',},
    {id:27, name: 'Sandshrew', type1: 'Ground', type2: 'Ground', img: 'https://img.pokemondb.net/sprites/black-white/normal/sandshrew.png',},
    {id:28, name: 'Sandslah', type1: 'Ground', type2: 'Ground', img: 'https://img.pokemondb.net/sprites/black-white/normal/sandslash.png',},
    {id:29, name: 'Nidoran♀', type1: 'Poison', type2: 'Poison', img: 'https://img.pokemondb.net/sprites/black-white/normal/nidoran-f.png',},
    {id:30, name: 'Nidorina', type1: 'Poison', type2: 'Poison', img: 'https://img.pokemondb.net/sprites/black-white/normal/nidorina.png',},
    {id:31, name: 'Nidoqueen', type1: 'Poison', type2: 'Ground', img: 'https://img.pokemondb.net/sprites/black-white/normal/nidoqueen.png',},
    {id:32, name: 'Nidoran♂', type1: 'Poison', type2: 'Poison', img: 'https://img.pokemondb.net/sprites/black-white/normal/nidoran-m.png',},
    {id:33, name: 'Nidorino', type1: 'Poison', type2: 'Poison', img: 'https://img.pokemondb.net/sprites/black-white/normal/nidorino.png',},
    {id:34, name: 'Nidoking', type1: 'Poison', type2: 'Ground', img: 'https://img.pokemondb.net/sprites/black-white/normal/nidoking.png',},
    {id:35, name: 'Clefairy', type1: 'Fairy', type2: 'Fariy', img: 'https://img.pokemondb.net/sprites/black-white/normal/clefairy.png',},
    {id:36, name: 'Clefable', type1: 'Fairy', type2: 'Fairy', img: 'https://img.pokemondb.net/sprites/black-white/normal/clefable.png',},
    {id:37, name: 'Vulpix', type1: 'Fire', type2: 'Fire', img: 'https://img.pokemondb.net/sprites/black-white/normal/vulpix.png',},
    {id:38, name: 'Ninetales', type1: 'Fire', type2: 'Fire', img: 'https://img.pokemondb.net/sprites/black-white/normal/ninetales.png',},
    {id:39, name: 'Jigglypuff', type1: 'Normal', type2: 'Fariy', img: 'https://img.pokemondb.net/sprites/black-white/normal/jigglypuff.png',},
    {id:40, name: 'Wigglytuff', type1: 'Normal', type2: 'Fairy', img: 'https://img.pokemondb.net/sprites/black-white/normal/wigglytuff.png',},

    {id:41, name: 'Zubat', type1: 'Poison', type2: 'Flying', img: 'https://img.pokemondb.net/sprites/black-white/normal/zubat.png',},
    {id:42, name: 'Golbat', type1: 'Poison', type2: 'Flying', img: 'https://img.pokemondb.net/sprites/black-white/normal/golbat.png',},
    {id:43, name: 'Oddish', type1: 'Grass', type2: 'Poison', img: 'https://img.pokemondb.net/sprites/black-white/normal/oddish.png',},
    {id:44, name: 'Gloom', type1: 'Grass', type2: 'Poison', img: 'https://img.pokemondb.net/sprites/black-white/normal/gloom.png',},
    {id:45, name: 'Vileplume', type1: 'Grass', type2: 'Poison', img: 'https://img.pokemondb.net/sprites/black-white/normal/vileplume.png',},
    {id:46, name: 'Paras', type1: 'Bug', type2: 'Grass', img: 'https://img.pokemondb.net/sprites/black-white/normal/paras.png',},
    {id:47, name: 'Parasect', type1: 'Bug', type2: 'Grass', img: 'https://img.pokemondb.net/sprites/black-white/normal/parasect.png',},
    {id:48, name: 'Venonat', type1: 'Bug', type2: 'Poison', img: 'https://img.pokemondb.net/sprites/black-white/normal/venonat.png',},
    {id:49, name: 'Venomoth', type1: 'Bug', type2: 'Poison', img: 'https://img.pokemondb.net/sprites/black-white/normal/venomoth.png',},
    {id:50, name: 'Diglett', type1: 'Ground', type2: 'Ground', img: 'https://img.pokemondb.net/sprites/black-white/normal/diglett.png',},
    {id:51, name: 'Dugtrio', type1: 'Ground', type2: 'Ground', img: 'https://img.pokemondb.net/sprites/black-white/normal/dugtrio.png',},
    {id:52, name: 'Meowth', type1: 'Normal', type2: 'Normal', img: 'https://img.pokemondb.net/sprites/black-white/normal/meowth.png',},
    {id:53, name: 'Persian', type1: 'Normal', type2: 'Normal', img: 'https://img.pokemondb.net/sprites/black-white/normal/persian.png',},
    {id:54, name: 'Psyduck', type1: 'Water', type2: 'Water', img: 'https://img.pokemondb.net/sprites/black-white/normal/psyduck.png',},
    {id:55, name: 'Golduck', type1: 'Water', type2: 'Water', img: 'https://img.pokemondb.net/sprites/black-white/normal/golduck.png',},
    {id:56, name: 'Mankey', type1: 'Fighting', type2: 'Fighting', img: 'https://img.pokemondb.net/sprites/black-white/normal/mankey.png',},
    {id:57, name: 'Primeape', type1: 'Fighting', type2: 'Fighting', img: 'https://img.pokemondb.net/sprites/black-white/normal/primeape.png',},
    {id:58, name: 'Growlithe', type1: 'Fire', type2: 'Fire', img: 'https://img.pokemondb.net/sprites/black-white/normal/growlithe.png',},
    {id:59, name: 'Arcanine', type1: 'Fire', type2: 'Fire', img: 'https://img.pokemondb.net/sprites/black-white/normal/arcanine.png',},
    {id:60, name: 'Poliwag', type1: 'Water', type2: 'Water', img: 'https://img.pokemondb.net/sprites/black-white/normal/poliwag.png',},
    {id:61, name: 'Poliwhirl', type1: 'Water', type2: 'Water', img: 'https://img.pokemondb.net/sprites/black-white/normal/poliwhirl.png',},
    {id:62, name: 'Poliwrath', type1: 'Water', type2: 'Fighting', img: 'https://img.pokemondb.net/sprites/black-white/normal/poliwrath.png',},
    {id:63, name: 'Abra', type1: 'Psychic', type2: 'Psychic', img: 'https://img.pokemondb.net/sprites/black-white/normal/abra.png',},
    {id:64, name: 'Kadabra', type1: 'Psychic', type2: 'Psychic', img: 'https://img.pokemondb.net/sprites/black-white/normal/kadabra.png',},
    {id:65, name: 'Alakazam', type1: 'Psychic', type2: 'Psychic', img: 'https://img.pokemondb.net/sprites/black-white/normal/alakazam.png',},
    {id:66, name: 'Machop', type1: 'Fighting', type2: 'Fighting', img: 'https://img.pokemondb.net/sprites/black-white/normal/machop.png',},
    {id:67, name: 'Machoke', type1: 'Fighting', type2: 'Fighting', img: 'https://img.pokemondb.net/sprites/black-white/normal/machoke.png',},
    {id:68, name: 'Machamp', type1: 'Fighting', type2: 'Fighting', img: 'https://img.pokemondb.net/sprites/black-white/normal/machamp.png',},
    {id:69, name: 'Bellsprout', type1: 'Grass', type2: 'Poison', img: 'https://img.pokemondb.net/sprites/black-white/normal/bellsprout.png',},
    {id:70, name: 'Weepinbell', type1: 'Grass', type2: 'Poison', img: 'https://img.pokemondb.net/sprites/black-white/normal/weepinbell.png',},
    {id:71, name: 'Victreebel', type1: 'Grass', type2: 'Poison', img: 'https://img.pokemondb.net/sprites/black-white/normal/victreebel.png',},
    {id:72, name: 'Tentacool', type1: 'Water', type2: 'Poison', img: 'https://img.pokemondb.net/sprites/black-white/normal/tentacool.png',},
    {id:73, name: 'Tentacruel', type1: 'Water', type2: 'Poison', img: 'https://img.pokemondb.net/sprites/black-white/normal/tentacruel.png',},
    {id:74, name: 'Geodude', type1: 'Rock', type2: 'Ground', img: 'https://img.pokemondb.net/sprites/black-white/normal/geodude.png',},
    {id:75, name: 'Graveler', type1: 'Rock', type2: 'Ground', img: 'https://img.pokemondb.net/sprites/black-white/normal/graveler.png',},
    {id:76, name: 'Golem', type1: 'Rock', type2: 'Ground', img: 'https://img.pokemondb.net/sprites/black-white/normal/golem.png',},
    {id:77, name: 'Ponyta', type1: 'Fire', type2: 'Fire', img: 'https://img.pokemondb.net/sprites/black-white/normal/ponyta.png',},
    {id:78, name: 'Rapidash', type1: 'Fire', type2: 'Fire', img: 'https://img.pokemondb.net/sprites/black-white/normal/rapidash.png',},
    {id:79, name: 'Slowpoke', type1: 'Water', type2: 'Psychic', img: 'https://img.pokemondb.net/sprites/black-white/normal/slowpoke.png',},
    {id:80, name: 'Slowbro', type1: 'Water', type2: 'Psychic', img: 'https://img.pokemondb.net/sprites/black-white/normal/slowbro.png',},
    {id:81, name: 'Magnemite', type1: 'Electric', type2: 'Steel', img: 'https://img.pokemondb.net/sprites/black-white/normal/magnemite.png',},
    {id:82, name: 'Magneton', type1: 'Electric', type2: 'Steel', img: 'https://img.pokemondb.net/sprites/black-white/normal/magneton.png',},
    {id:83, name: 'Farfetch d', type1: 'Normal', type2: 'Flying', img: 'https://img.pokemondb.net/sprites/black-white/normal/farfetchd.png',},
    {id:84, name: 'Doduo', type1: 'Normal', type2: 'Flying', img: 'https://img.pokemondb.net/sprites/black-white/normal/doduo.png',},
    {id:85, name: 'Dodrio', type1: 'Normal', type2: 'Flying', img: 'https://img.pokemondb.net/sprites/black-white/normal/dodrio.png',},
    {id:86, name: 'Seel', type1: 'Water', type2: 'Water', img: 'https://img.pokemondb.net/sprites/black-white/normal/seel.png',},
    {id:87, name: 'Dewgong', type1: 'Water', type2: 'Ice', img: 'https://img.pokemondb.net/sprites/black-white/normal/dewgong.png',},
    {id:88, name: 'Grimer', type1: 'Poison', type2: 'Poison', img: 'https://img.pokemondb.net/sprites/black-white/normal/grimer.png',},
    {id:89, name: 'Muk', type1: 'Poison', type2: 'Poison', img: 'https://img.pokemondb.net/sprites/black-white/normal/muk.png',},
    {id:90, name: 'Shellder', type1: 'Water', type2: 'Water', img: 'https://img.pokemondb.net/sprites/black-white/normal/shellder.png',},
    {id:91, name: 'Cloyster', type1: 'Water', type2: 'Ice', img: 'https://img.pokemondb.net/sprites/black-white/normal/cloyster.png',},
    {id:92, name: 'Gastly', type1: 'Ghost', type2: 'Poison', img: 'https://img.pokemondb.net/sprites/black-white/normal/gastly.png',},
    {id:93, name: 'Haunter', type1: 'Ghost', type2: 'Poison', img: 'https://img.pokemondb.net/sprites/black-white/normal/haunter.png',},
    {id:94, name: 'Gengar', type1: 'Ghost', type2: 'Poison', img: 'https://img.pokemondb.net/sprites/black-white/normal/gengar.png',},
    {id:95, name: 'Onix', type1: 'Rock', type2: 'Ground', img: 'https://img.pokemondb.net/sprites/black-white/normal/onix.png',},
    {id:96, name: 'Drowzee', type1: 'Psychic', type2: 'Psychic', img: 'https://img.pokemondb.net/sprites/black-white/normal/drowzee.png',},
    {id:97, name: 'Hypno', type1: 'Psychic', type2: 'Psychic', img: 'https://img.pokemondb.net/sprites/black-white/normal/hypno.png',},
    {id:98, name: 'Krabby', type1: 'Water', type2: 'Water', img: 'https://img.pokemondb.net/sprites/black-white/normal/krabby.png',},
    {id:99, name: 'Kingler', type1: 'Water', type2: 'Water', img: 'https://img.pokemondb.net/sprites/black-white/normal/kingler.png',},
    {id:100, name: 'Voltorb', type1: 'Electric', type2: 'Electric', img: 'https://img.pokemondb.net/sprites/black-white/normal/voltorb.png',},
    {id:101, name: 'Electrode', type1: 'Electric', type2: 'Electric', img: 'https://img.pokemondb.net/sprites/black-white/normal/electrode.png',},
    {id:102, name: 'Exeggcute', type1: 'Grass', type2: 'Psychic', img: 'https://img.pokemondb.net/sprites/black-white/normal/exeggcute.png',},
    {id:103, name: 'Exeggutor', type1: 'Grass', type2: 'Psychic', img: 'https://img.pokemondb.net/sprites/black-white/normal/exeggutor.png',},
    {id:104, name: 'Cubone', type1: 'Ground', type2: 'Ground', img: 'https://img.pokemondb.net/sprites/black-white/normal/cubone.png',},
    {id:105, name: 'Marowak', type1: 'Ground', type2: 'Ground', img: 'https://img.pokemondb.net/sprites/black-white/normal/marowak.png',},
    {id:106, name: 'Hitmonlee', type1: 'Fighting', type2: 'Fighting', img: 'https://img.pokemondb.net/sprites/black-white/normal/hitmonlee.png',},
    {id:107, name: 'Hitmonchan', type1: 'Fighting', type2: 'Fighting', img: 'https://img.pokemondb.net/sprites/black-white/normal/hitmonchan.png',},
    {id:108, name: 'Lickitung', type1: 'Normal', type2: 'Normal', img: 'https://img.pokemondb.net/sprites/black-white/normal/lickitung.png',},
    {id:109, name: 'Koffing', type1: 'Poison', type2: 'Poison', img: 'https://img.pokemondb.net/sprites/black-white/normal/koffing.png',},
    {id:110, name: 'Weezing', type1: 'Poison', type2: 'Poison', img: 'https://img.pokemondb.net/sprites/black-white/normal/weezing.png',},
    {id:111, name: 'Rhyhorn', type1: 'Rock', type2: 'Ground', img: 'https://img.pokemondb.net/sprites/black-white/normal/rhyhorn.png',},
    {id:112, name: 'Rhydon', type1: 'Rock', type2: 'Ground', img: 'https://img.pokemondb.net/sprites/black-white/normal/rhydon.png',},
    {id:113, name: 'Chansey', type1: 'Normal', type2: 'Normal', img: 'https://img.pokemondb.net/sprites/black-white/normal/chansey.png',},
    {id:114, name: 'Tangela', type1: 'Grass', type2: 'Grass', img: 'https://img.pokemondb.net/sprites/black-white/normal/tangela.png',},
    {id:115, name: 'Kangaskhan', type1: 'Normal', type2: 'Normal', img: 'https://img.pokemondb.net/sprites/black-white/normal/kangaskhan.png',},
    {id:116, name: 'Horsea', type1: 'Water', type2: 'Water', img: 'https://img.pokemondb.net/sprites/black-white/normal/horsea.png',},
    {id:117, name: 'Seadra', type1: 'Water', type2: 'Water', img: 'https://img.pokemondb.net/sprites/black-white/normal/seadra.png',},
    {id:118, name: 'Goldeen', type1: 'Water', type2: 'Water', img: 'https://img.pokemondb.net/sprites/black-white/normal/goldeen.png',},
    {id:119, name: 'Seaking', type1: 'Water', type2: 'Water', img: 'https://img.pokemondb.net/sprites/black-white/normal/seaking.png',},
    {id:120, name: 'Staryu', type1: 'Water', type2: 'Water', img: 'https://img.pokemondb.net/sprites/black-white/normal/staryu.png',},
    {id:121, name: 'Starmie', type1: 'Water', type2: 'Psychic', img: 'https://img.pokemondb.net/sprites/black-white/normal/starmie.png',},
    {id:122, name: 'Mr. Mime', type1: 'Psychic', type2: 'Fairy', img: 'https://img.pokemondb.net/sprites/black-white/normal/mr-mime.png',},
    {id:123, name: 'Scyther', type1: 'Bug', type2: 'Flying', img: 'https://img.pokemondb.net/sprites/black-white/normal/scyther.png',},
    {id:124, name: 'Jynx', type1: 'Ice', type2: 'Psychic', img: 'https://img.pokemondb.net/sprites/black-white/normal/jynx.png',},
    {id:125, name: 'Electabuzz', type1: 'Electric', type2: 'Electric', img: 'https://img.pokemondb.net/sprites/black-white/normal/electabuzz.png',},
    {id:126, name: 'Magmar', type1: 'Fire', type2: 'Fire', img: 'https://img.pokemondb.net/sprites/black-white/normal/magmar.png',},
    {id:127, name: 'Pinsir', type1: 'Bug', type2: 'Bug', img: 'https://img.pokemondb.net/sprites/black-white/normal/pinsir.png',},
    {id:128, name: 'Tauros', type1: 'Normal', type2: 'Normal', img: 'https://img.pokemondb.net/sprites/black-white/normal/tauros.png',},
    {id:129, name: 'Magikarp', type1: 'Water', type2: 'Water', img: 'https://img.pokemondb.net/sprites/black-white/normal/magikarp.png',},
    {id:130, name: 'Gyarados', type1: 'Water', type2: 'Flying', img: 'https://img.pokemondb.net/sprites/black-white/normal/gyarados.png',},
    {id:131, name: 'Lapras', type1: 'Water', type2: 'Ice', img: 'https://img.pokemondb.net/sprites/black-white/normal/lapras.png',},
    {id:132, name: 'Ditto', type1: 'Normal', type2: 'Normal', img: 'https://img.pokemondb.net/sprites/black-white/normal/ditto.png',},
    {id:133, name: 'Eevee', type1: 'Normal', type2: 'Normal', img: 'https://img.pokemondb.net/sprites/black-white/normal/eevee.png',},
    {id:134, name: 'Vaporeon', type1: 'Water', type2: 'Water', img: 'https://img.pokemondb.net/sprites/black-white/normal/vaporeon.png',},
    {id:135, name: 'Jolteon', type1: 'Electric', type2: 'Electric', img: 'https://img.pokemondb.net/sprites/black-white/normal/jolteon.png',},
    {id:136, name: 'Flareon', type1: 'Fire', type2: 'Fire', img: 'https://img.pokemondb.net/sprites/black-white/normal/flareon.png',},
    {id:137, name: 'Porygon', type1: 'Normal', type2: 'Normal', img: 'https://img.pokemondb.net/sprites/black-white/normal/porygon.png',},
    {id:138, name: 'Omanyte', type1: 'Rock', type2: 'Water', img: 'https://img.pokemondb.net/sprites/black-white/normal/omanyte.png',},
    {id:139, name: 'Omastar', type1: 'Rock', type2: 'Water', img: 'https://img.pokemondb.net/sprites/black-white/normal/omastar.png',},
    {id:140, name: 'Kabuto', type1: 'Rock', type2: 'Water', img: 'https://img.pokemondb.net/sprites/black-white/normal/kabuto.png',},
    {id:141, name: 'Kabutops', type1: 'Rock', type2: 'Water', img: 'https://img.pokemondb.net/sprites/black-white/normal/kabutops.png',},
    {id:142, name: 'Aerodactyl', type1: 'Rock', type2: 'Flying', img: 'https://img.pokemondb.net/sprites/black-white/normal/aerodactyl.png',},
    {id:143, name: 'Snorlax', type1: 'Normal', type2: 'Normal', img: 'https://img.pokemondb.net/sprites/black-white/normal/snorlax.png',},
    {id:144, name: 'Articuno', type1: 'Ice', type2: 'Flying', img: 'https://img.pokemondb.net/sprites/black-white/normal/articuno.png',},
    {id:145, name: 'Zapdos', type1: 'Electric', type2: 'Flying', img: 'https://img.pokemondb.net/sprites/black-white/normal/zapdos.png',},
    {id:146, name: 'Moltres', type1: 'Fire', type2: 'Flying', img: 'https://img.pokemondb.net/sprites/black-white/normal/moltres.png',},
    {id:147, name: 'Dratini', type1: 'Dragon', type2: 'Dragon', img: 'https://img.pokemondb.net/sprites/black-white/normal/dratini.png',},
    {id:148, name: 'Dragonair', type1: 'Dragon', type2: 'Dragon', img: 'https://img.pokemondb.net/sprites/black-white/normal/dragonair.png',},
    {id:149, name: 'Dragonite', type1: 'Dragon', type2: 'Flying', img: 'https://img.pokemondb.net/sprites/black-white/normal/dragonite.png',},
    {id:150, name: 'Mewtwo', type1: 'Psychic', type2: 'Psychic', img: 'https://img.pokemondb.net/sprites/black-white/normal/mewtwo.png',},
    {id:151, name: 'Mew', type1: 'Psychic', type2: 'Psychic', img: 'https://img.pokemondb.net/sprites/black-white/normal/mew.png',},
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
