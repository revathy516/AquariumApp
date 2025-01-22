import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const DetailScreen = ({ route, navigation }) => {
  const { data } = route.params;

  return (
    <View style={styles.container}>
      <Image source={data.image} style={styles.image} />
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{data.name}</Text>
      <Text style={styles.description}>
      The body of an alligator gar is torpedo-shaped, usually brown or olive colored, fading to a lighter gray or yellow ventral surface. In very rare occurrences, they can also be black, seen in gars that have a high level of melanin. Their scales are not like the scales of other fishes; rather, they are ganoid scales, which are bone-like, rhomboidal-shaped scales, often with serrated edges, and covered by an enamel-like substance. Ganoid scales are nearly impenetrable, and are excellent protection against predation. Unlike other gar species, the upper jaw of an alligator gar has a dual row of large, sharp teeth that are used to impale and hold prey. Alligator gar are stalking, ambush predators, primarily piscivores, but they also ambush and eat waterfowl and small mammals they find floating on the water's surface.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  image: { width: '100%', height: 250 },
  backButton: { position: 'absolute', top: 20, left: 10, padding: 10, backgroundColor: 'rgba(0,0,0,0.5)' },
  backText: { color: '#fff', fontSize: 16 },
  title: { fontSize: 24, fontWeight: 'bold', margin: 10 },
  description: { margin: 10, fontSize: 16, color: '#555' },
});

export default DetailScreen;
