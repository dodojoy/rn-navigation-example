import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function FriendsScreen() {
  const navigation = useNavigation();

  const friends = [
    {
      id: 1,
      name: "Lucas Fernando",
      avatar: "👨‍💼",
      description: "Designer UX/UI | Apaixonado por interfaces",
    },
    {
      id: 2,
      name: "Dominique Morem",
      avatar: "👩‍🎓",
      description: "Desenvolvedora Frontend | React Native",
    },
    {
      id: 3,
      name: "Luiz Henrique",
      avatar: "🧔",
      description: "Aspirante a desenvolvedor full stack",
    },
    {
      id: 4,
      name: "Geovana Mickaela",
      avatar: "👩‍🏫",
      description: "Desenvolvedora de Chatbot",
    },
    {
      id: 5,
      name: "Bruna Lorena",
      avatar: "👨‍🚀",
      description: "Artista e Designer animadora",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {friends.map((friend) => (
        <ThemedView key={friend.id} style={styles.friendCard}>
          <ThemedView style={styles.avatar}>
            <ThemedText style={styles.avatarText}>{friend.avatar}</ThemedText>
          </ThemedView>
          <ThemedView style={styles.friendInfo}>
            <ThemedText type="defaultSemiBold" style={styles.name}>
              {friend.name}
            </ThemedText>
            <ThemedText style={styles.description}>
              {friend.description}
            </ThemedText>
          </ThemedView>
        </ThemedView>
      ))}

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("index" as never);
        }}
        style={styles.button}
      >
        <ThemedText style={styles.buttonText}>Ver feed</ThemedText>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    gap: 16,
    marginTop: 16,
  },
  friendCard: {
    flexDirection: "row",
    padding: 12,
    marginHorizontal: 16,
    borderRadius: 12,
    backgroundColor: "rgba(114, 114, 114, 0.1)",
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  avatarText: {
    fontSize: 20,
  },
  friendInfo: {
    flex: 1,
    backgroundColor: "transparent",
  },
  name: {
    fontSize: 18,
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
  },
  button: {
    backgroundColor: "purple",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
  },
});
