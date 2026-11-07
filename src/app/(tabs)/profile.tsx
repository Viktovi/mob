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
              uri: "https://raw.githubusercontent.com/Viktovi/mob/main/assets/images/avat%20(1).png",
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
                source={{
                  uri: "https://raw.githubusercontent.com/Viktovi/mob/main/assets/images/val.png",
                }}
                style={styles.gameImage}
              />
              <Text style={styles.gameName}>Valorant</Text>
            </View>

            <View style={styles.gameCard}>
              <Image
                source={{
                  uri: "https://raw.githubusercontent.com/Viktovi/mob/main/assets/images/cs.png",
                }}
                style={styles.gameImage}
              />
              <Text style={styles.gameName}>CS2</Text>
            </View>

            <View style={styles.gameCard}>
              <Image
                source={{
                  uri: "https://raw.githubusercontent.com/Viktovi/mob/main/assets/images/previewfile_2995893840.png",
                }}
                style={styles.gameImage}
              />
              <Text style={styles.gameName}>Dota 2</Text>
            </View>

            <View style={styles.gameCard}>
              <Image
                source={{
                  uri: "https://raw.githubusercontent.com/Viktovi/mob/main/assets/images/Fortnite_F_lettermark_logo.png",
                }}
                style={styles.gameImage}
              />
              <Text style={styles.gameName}>Fortnite</Text>
            </View>
          </View>
        </View>

        {/* Статистика по іграх */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Статистика по іграх</Text>

          <View style={styles.card}>
            <Image
              source={{
                uri: "https://raw.githubusercontent.com/Viktovi/mob/main/assets/images/val.png",
              }}
              style={styles.statsImage}
            />
            <Text style={styles.cardText}>Valorant</Text>
            <View style={styles.statsInfo}>
              <Text style={styles.description}>K/D: 1.2</Text>
              <Text style={styles.description}>Win %: 54%</Text>
            </View>
          </View>

          <View style={styles.card}>
            <Image
              source={{
                uri: "https://raw.githubusercontent.com/Viktovi/mob/main/assets/images/cs.png",
              }}
              style={styles.statsImage}
            />
            <Text style={styles.cardText}>CS2</Text>
            <View style={styles.statsInfo}>
              <Text style={styles.description}>K/D: 1.0</Text>
              <Text style={styles.description}>Win %: 47%</Text>
            </View>
          </View>
        </View>

        {/* Посилання на акаунти */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Посилання на акаунти</Text>

          <View style={styles.accountCard}>
            <Image
              source={{
                uri: "https://raw.githubusercontent.com/Viktovi/mob/main/assets/images/steam.png",
              }}
              style={styles.gameImage}
            />
            <Text style={styles.linkText}>Steam</Text>
            <Text style={styles.connected}>Підключено</Text>
          </View>

          <View style={styles.accountCard}>
            <Image
              source={{
                uri: "https://raw.githubusercontent.com/Viktovi/mob/main/assets/images/riot.png",
              }}
              style={styles.gameImage}
            />
            <Text style={styles.linkText}>Riot Games</Text>
            <Text style={styles.connected}>Підключено</Text>
          </View>

          <View style={styles.accountCard}>
            <Image
              source={{
                uri: "https://raw.githubusercontent.com/Viktovi/mob/main/assets/images/EG.png",
              }}
              style={styles.gameImage}
            />
            <Text style={styles.linkText}>Epic Games</Text>
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
    flex: 1,
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

  gameCard: {
    width: "23%",
    minHeight: 90,
    backgroundColor: "#292929",
    padding: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#553333",
    alignItems: "center",
    justifyContent: "center",
  },

  gameImage: {
    width: 45,
    height: 45,
    marginBottom: 8,
    resizeMode: "contain",
  },

  gameName: {
    color: "#ffffff",
    fontSize: 12,
    textAlign: "center",
  },

  card: {
    backgroundColor: "#292929",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#553333",
    flexDirection: "row",
    alignItems: "center",
  },

  statsImage: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },

  cardText: {
    color: "#ffffff",
    fontSize: 16,
    marginLeft: 10,
    flex: 1,
  },

  statsInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    marginRight: 15,
  },

  accountCard: {
    backgroundColor: "#292929",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#553333",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  linkText: {
    color: "#ffffff",
    fontSize: 16,
    marginLeft: 10,
    flex: 1,
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
