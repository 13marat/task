import * as Yup from 'yup'

export const validationSchema = Yup.object({
    username: Yup.string().required(),
    email: Yup.string().email().required()
})