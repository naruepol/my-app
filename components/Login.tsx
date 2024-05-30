import { FC } from 'react';
import { View, Text, Image, TextInput, Pressable } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { MyInput } from './ui/MyInput';

const LoginSchema = z.object({
    userName: z.string({ required_error: "กรุณาระบุรหัสพนักงาน" }),
    password: z.string({ required_error: "กรุณาระบุรหัสผ่าน" })
});

type LoginModel = z.infer<typeof LoginSchema>;

export const Login: FC = () => {

    const navigation = useNavigation<NavigationProp<any>>();
    const { control, reset, handleSubmit } = useForm<LoginModel>({
        resolver: zodResolver(LoginSchema)
    });

    // navigate to Register Screen
    const whenGotoRegister = () => {
        navigation.navigate("register");
    }

    // when validate pass
    const validatePass: SubmitHandler<LoginModel> = (form) => {
        console.log(form);
    }
    // when reset press
    const resetForm = () => {
        reset();
    }

    return <>
        <View className='w-full h-full px-4 space-y-4'>
            <View className='flex flex-col items-center mt-10'>
                <Image
                    className='rounded-full'
                    source={require('../assets/logo.jpg')} />
                <Text
                    className='text-3xl font-bold text-blue-800'>ยินดีต้อนรับ</Text>
            </View>
            <View>
                <MyInput label='รหัสพนักงาน' name="userName" control={control} />
            </View>
            <View>
                <MyInput label='รหัสผ่าน' name="password" control={control} isSecure={true} />
            </View>
            <View className='flex flex-row space-x-2'>
                <Pressable onPress={handleSubmit(validatePass)}
                    className='flex-1 p-2 bg-blue-600 rounded-md'>
                    <Text className='text-center text-white'>เข้าสู่ระบบ</Text>
                </Pressable>
                <Pressable onPress={resetForm}
                    className='flex-1 p-2 bg-red-600 rounded-md'>
                    <Text className='text-center text-white'>ยกเลิก</Text>
                </Pressable>
            </View>
            <View>
                <Pressable onPress={whenGotoRegister}>
                    <Text
                        className='text-center text-blue-700 underline'>ลงทะเบียนผู้ใช้ใหม่</Text>
                </Pressable>
            </View>
        </View>
    </>
}