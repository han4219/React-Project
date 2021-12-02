const isEmail = value => /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value)

export default isEmail
