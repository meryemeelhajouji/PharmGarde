import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Comment = ({ comment }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15, paddingHorizontal: 10 }}>
      <MaterialIcons name="account-circle" size={24} color="black" />
      <View style={{ marginLeft: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Anonymous</Text>
        <Text style={{ opacity: 0.5 }}>{comment}</Text>
      </View>
    </View>
  );
};

export default Comment;
