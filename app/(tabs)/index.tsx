import { SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useNavigation } from "expo-router";


export default function HomeScreen() {
  const navigation = useNavigation();
  const posts = [
    {
      id: 1,
      user: {
        name: "Joyce Teodoro",
        avatar: "👩",
      },
      content:
        "Acabei de finalizar um novo projeto de design! Muito feliz com o resultado.",
      date: "2 horas atrás",
    },
    {
      id: 2,
      user: {
        name: "Lucas Fernando",
        avatar: "👨",
      },
      content: "Dia produtivo de estudos! Aprendendo React Native.",
      date: "5 horas atrás",
    },
    {
      id: 3,
      user: {
        name: "Dominique Morem",
        avatar: "👧",
      },
      content: "Novo café na cidade, alguém quer conhecer?",
      date: "1 dia atrás",
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      {posts.map((post, index) => (
        <ThemedView 
          key={post.id} 
          style={[
            styles.postContainer,
            index === posts.length - 1 && { borderBottomWidth: 0 }
          ]}
        >
          <ThemedView style={styles.postHeader}>
            <ThemedView style={styles.avatar}>
              <ThemedText style={styles.avatarText}>
                {post.user.avatar}
              </ThemedText>
            </ThemedView>
            <ThemedView style={styles.userInfo}>
              <ThemedText type="defaultSemiBold">{post.user.name}</ThemedText>
              <ThemedText style={styles.date}>{post.date}</ThemedText>
            </ThemedView>
          </ThemedView>
          <ThemedText style={styles.content}>{post.content}</ThemedText>
        </ThemedView>
      ))}

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("friends" as never);
        }}
        style={styles.button}
      >
        <ThemedText style={styles.buttonText}>Ver amigos</ThemedText>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  postContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(114, 114, 114, 0.1)",
    width: "100%",
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.1)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  avatarText: {
    fontSize: 20,
  },
  userInfo: {
    flex: 1,
  },
  date: {
    fontSize: 12,
    opacity: 0.7,
  },
  content: {
    fontSize: 16,
    lineHeight: 22,
  },
  button: {
    backgroundColor: "purple",
    padding: 10,
    borderRadius: 8,
    marginTop: 16,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
  },
});
