import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        // Налаштування заголовка екрана
        headerShown: true,
        headerStyle: {
          backgroundColor: "#111111",
          height: 30,
        },
        headerTintColor: "#ffffff",
        headerTitleStyle: {
          fontWeight: "bold",
        },

        // Кольори нижньої навігації
        tabBarActiveTintColor: "#ff3333",
        tabBarInactiveTintColor: "#888888",

        // Стилі нижньої панелі
        tabBarStyle: {
          backgroundColor: "#1c1c1c",
          borderTopColor: "#333333",
          borderTopWidth: 1,
          height: 70,
          paddingTop: 8,
          paddingBottom: 8,
        },

        // Стилі підписів вкладок
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "500",
        },
      }}
    >
      {/* Головна */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Головна",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />

      {/* Пошук */}
      <Tabs.Screen
        name="search"
        options={{
          title: "Пошук",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search-outline" size={size} color={color} />
          ),
        }}
      />

      {/* Чати */}
      <Tabs.Screen
        name="chats"
        options={{
          title: "Чати",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubble-outline" size={size} color={color} />
          ),
        }}
      />

      {/* Профіль */}
      <Tabs.Screen
        name="profile"
        options={{
          title: "Профіль",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />

      {/* Sandbox приховано з нижньої навігації */}
      <Tabs.Screen
        name="sandbox"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
