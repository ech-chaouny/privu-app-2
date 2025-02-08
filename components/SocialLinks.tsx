import { Text, TouchableOpacity } from "react-native";
import React from "react";

interface SocialLinksProps {
  title: string;
  handlePress: () => void;
  containerStyle?: string;
  Icon: React.ComponentType<{ width: number; height: number }>;
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  title,
  handlePress,
  containerStyle,
  Icon,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`flex-row px-4 bg-transparent border-[1px] border-white-200 rounded-lg min-h-[50px] justify-start items-center ${containerStyle} `}
      // disabled={isLoading}
    >
      <Icon width={26} height={26} />
      <Text className="text-black-200 font-psemibold ml-5">{title}</Text>
    </TouchableOpacity>
  );
};

export default SocialLinks;
