import React, { FC, Fragment, useState } from 'react';
import { View, Text, Button } from 'react-native';

interface Props {
    title: string;
}

export const HelloWorld: FC<Props> = (p) => {
    //delare variable
    const [cnt, setCnt] = useState(10);

    // custome function 
    const whenAddPress = () => {
        //setCnt(88);
        setCnt(prevCnt => prevCnt + 2);
    }

    return <Fragment>
        <View className='w-full h-full p-8'>
          <View>
              <Text className='my-auto text-2xl text-blue-600'>{p.title} : {cnt}</Text>
              <Button title="Add" onPress={whenAddPress}/>
          </View>
        </View>
    </Fragment>
  }



  // export const HelloWorld: FC = () => {
//   return (
//     <Fragment>
//       <View className='w-full h-full p-8'>
//         <Text style={{ fontSize: 24, color: 'blue' }}>Hello World</Text>
//       </View>
//     </Fragment>
//   );
// }