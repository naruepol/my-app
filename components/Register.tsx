import { FC } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { z } from 'zod';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { MyInput } from '../components/ui/MyInput';

const RegisterSchema = z.object({
    userName: z.string().min(5).max(150),
    firstName: z.string().max(150),
    lastName: z.string().max(150),
    password: z.string().min(8).max(25),
});

type RegisterModel = z.infer<typeof RegisterSchema>;

export const Register: FC = () => {

    const { control, handleSubmit, reset } = useForm<RegisterModel>({
        resolver: zodResolver(RegisterSchema)
    });

    // when validate pass
    const validatePass: SubmitHandler<RegisterModel> = (form) => {
        console.log(form);
    }
    // when reset press
    const resetForm = () => {
        reset();
    }

    return <>
        <View className='w-full h-full px-4 space-y-4'>
            <View>
                <MyInput label='รหัสพนักงาน' name='userName' control={control} />
            </View>
            <View>
                <MyInput label='ชื่อ' name='firstName' control={control} />
            </View>
            <View>
                <MyInput label='นามสกุล' name='lastName' control={control} />
            </View>
            <View>
                <MyInput label='รหัสผ่าน' name='password' control={control} isSecure={true}  />
            </View>
            <View className='flex flex-row space-x-2'>
                <Pressable onPress={handleSubmit(validatePass)}
                    className='flex-1 p-2 bg-blue-600 rounded-md'>
                    <Text className='text-center text-white'>ลงทะเบียน</Text>
                </Pressable>
                <Pressable onPress={resetForm}
                    className='flex-1 p-2 bg-red-600 rounded-md'>
                    <Text className='text-center text-white'>ยกเลิก</Text>
                </Pressable>
            </View>
        </View>
    </>
}