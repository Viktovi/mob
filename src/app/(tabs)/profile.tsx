import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
export default function StudentProfileScreen() {
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.container}>
        {/* Заголовок профілю */}
        <View style={styles.header}>
          <Text style={styles.title}>Мій профіль</Text>
          <Text style={styles.editButton}>Редагувати</Text>
        </View>

        {/* Інформація */}
        <View style={styles.profile}>
          {/* Аватар */}
          <Image
            source={{
              uri: "https://",
            }}
            style={styles.avatar}
          />

          {/* Ім'я та статус */}
          <View style={styles.profileInfo}>
            <Text style={styles.name}>Name</Text>
            <Text style={styles.description}>Європа • Українська</Text>
            <Text style={styles.description}>
              Шукаю напарника для спільної гри
            </Text>
          </View>
        </View>

        {/* Улюблені ігри */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Улюблені ігри</Text>
            <Text style={styles.link}>Дивитися всі</Text>
          </View>

          <View style={styles.games}>
            <View style={styles.gameCard}>
              <Image
                source={require("../../../assets/images/val.png")}
                style={styles.gameImage}
              />
              <Text style={styles.gameName}>Valorant</Text>
            </View>

            <View style={styles.gameCard}>
              <Text style={styles.gameName}>CS2</Text>
            </View>

            <View style={styles.gameCard}>
              <Text style={styles.gameName}>Dota 2</Text>
            </View>

            <View style={styles.gameCard}>
              <Text style={styles.gameName}>Fortnite</Text>
            </View>
          </View>
        </View>

        {/* Статистика по іграх */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Статистика по іграх</Text>

          <View style={styles.card}>
            <Text style={styles.cardText}>Valorant</Text>
            <View style={styles.statsRow}>
              <Text style={styles.description}>K/D: 1.2</Text>
              <Text style={styles.description}>Win %: 54%</Text>
            </View>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardText}>CS2</Text>
            <View style={styles.statsRow}>
              <Text style={styles.description}>K/D: 1.0</Text>
              <Text style={styles.description}>Win %: 47%</Text>
            </View>
          </View>
        </View>

        {/* Посилання на акаунти */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Посилання на акаунти</Text>

          <View style={styles.accountCard}>
            <Text style={styles.cardText}>Steam</Text>
            <Text style={styles.connected}>Підключено</Text>
          </View>

          <View style={styles.accountCard}>
            <Text style={styles.cardText}>Riot Games</Text>
            <Text style={styles.connected}>Підключено</Text>
          </View>

          <View style={[styles.accountCard, styles.highlightedCard]}>
            <Text style={styles.cardText}>Epic Games</Text>
            <Text style={styles.notConnected}>Не підключено</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#111111",
  },

  container: {
    padding: 20,
    backgroundColor: "#111111",
  },

  header: {
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  title: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },

  editButton: {
    color: "#ffffff",
    backgroundColor: "#333333",
    padding: 8,
    marginTop: 10,
    borderRadius: 8,
    position: "absolute",
    right: 15,
  },

  profile: {
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
    flexDirection: "column",
    alignItems: "center",
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 50,
    marginBottom: 10,
  },

  profileInfo: {
    padding: 5,
    alignItems: "center",
  },

  name: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },

  description: {
    color: "#999999",
    fontSize: 13,
    marginTop: 5,
    textAlign: "center",
  },

  section: {
    padding: 12,
    marginBottom: 15,
    borderRadius: 10,
  },

  sectionHeader: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  sectionTitle: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "bold",
  },

  link: {
    color: "#ff3333",
    fontSize: 13,
  },

  games: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  gameName: {
    color: "#ffffff",
    fontSize: 12,
    textAlign: "center",
  },

  gameImage: {
    width: 45,
    height: 45,
    marginBottom: 8,
    resizeMode: "contain",
  },

  gameCard: {
    width: "23%",
    minHeight: 90,
    backgroundColor: "#292929",
    padding: 8,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  accountCard: {
    backgroundColor: "#292929",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  highlightedCard: {
    backgroundColor: "#252525",
  },

  card: {
    backgroundColor: "#292929",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#553333",
  },

  cardText: {
    color: "#ffffff",
    fontSize: 15,
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    gap: 30,
  },

  connected: {
    color: "#00aa33",
    fontSize: 13,
    marginTop: 5,
  },

  notConnected: {
    color: "#888888",
    fontSize: 13,
    marginTop: 5,
  },
});
