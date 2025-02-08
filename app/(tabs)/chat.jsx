// import { View, Text, FlatList, Image, ActivityIndicator } from "react-native";
// import React, { useContext, useEffect, useState } from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { getToken } from "../../services/TokenService";
// import axios from "../../utils/axios";
// import { TouchableRipple } from "react-native-paper";
// import Messages from "../account/messages";
// import AuthContext from "../../context/AuthContext";

const Chat = () => {
  //   const [messages, setMessages] = useState([]);
  //   const [visible, setVisible] = useState(false);
  //   const [chatId, setChatId] = useState("");
  //   const [loading, setLoading] = useState(true);
  //   const LimitedWords = (text, length) => {
  //     if (text.length <= length) return text;
  //     return text.substring(0, length) + "...";
  //   };
  //   useEffect(() => {
  //     getMessages();
  //   }, []);
  //   const getMessages = async () => {
  //     try {
  //       const token = await getToken();
  //       const response = await axios.get("/threads", {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       if (response.data.success === true) {
  //         setMessages(response.data.result.data);
  //         setLoading(false);
  //         // console.log(response.data.result.data[0]);
  //         // setLoading(false);
  //       }
  //     } catch (error) {
  //       console.error("Error response:", error.response.data);
  //     }
  //   };
  //   const formatToHours = (timestamp) => {
  //     if (!timestamp) return ""; // Handle cases where timestamp is undefined or null
  //     const date = new Date(timestamp);
  //     const hours = date.getHours().toString().padStart(2, "0"); // Ensure 2-digit format
  //     const minutes = date.getMinutes().toString().padStart(2, "0");
  //     return `${hours}:${minutes}`; // Format as HH:mm
  //   };
  //   return (
  //     <SafeAreaView className="bg-white w-full h-full">
  //       <View className="sticky z-10 top-0 bg-white w-full py-3.5 flex-row items-center justify-center border-b border-[#dddddd] px-4">
  //         <Text className="text-lg font-psemibold tracking-tight">Chats</Text>
  //       </View>
  //       <View className="flex flex-col">
  //         {loading ? (
  //           <View className="h-full justify-center items-center">
  //             <ActivityIndicator size={"large"} />
  //           </View>
  //         ) : (
  //           <FlatList
  //             data={messages}
  //             className="h-full"
  //             keyExtractor={(message, index) => String(message.id || index)} // Use `message.id` or fallback to index
  //             renderItem={({ item: message }) => (
  //               <TouchableRipple
  //                 onPress={() => {
  //                   setVisible(true);
  //                   setChatId(message.id);
  //                 }}
  //                 className={`w-full flex-row items-center border-b border-[#eee] py-2.5 px-3 ${
  //                   message.p_is_unread == true &&
  //                   message.latest_message.user_id !==
  //                     message.latest_message.p_recipient.user_id
  //                     ? "bg-[#eee]"
  //                     : ""
  //                 }`}
  //               >
  //                 <>
  //                   <Image
  //                     className="w-[60px] h-[60px] rounded-md"
  //                     resizeMode="cover"
  //                     source={{ uri: message.p_creator.photo_url }}
  //                     alt={message.title}
  //                   />
  //                   <View className="flex-1 relative ml-4">
  //                     <Text className="font-psemibold">
  //                       {LimitedWords(message.subject, 36)}
  //                     </Text>
  //                     <Text className="font-pregular my-1 text-[13px]">
  //                       {message.p_creator.name}
  //                     </Text>
  //                     <Text className="font-pregular text-[12px] text-white-300">
  //                       {LimitedWords(message.latest_message.body, 42)}
  //                     </Text>
  //                     <Text className="absolute bottom-0 right-0 font-pregular text-white-200 text-xs mt-1">
  //                       {formatToHours(message.latest_message.created_at)}
  //                     </Text>
  //                   </View>
  //                 </>
  //               </TouchableRipple>
  //             )}
  //             contentContainerStyle={{ paddingBottom: 10 }} // Optional: Add padding for better scrolling experience
  //             showsVerticalScrollIndicator={false} // Optional: Hide vertical scrollbar
  //           />
  //         )}
  //       </View>
  //       <Messages visible={visible} setVisible={setVisible} chatId={chatId} />
  //     </SafeAreaView>
  //   );
};

export default Chat;
