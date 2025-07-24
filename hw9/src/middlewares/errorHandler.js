
const errorHandler = (error, res, req, next) => {
    const { status, message } = error;
    res.status(status).json({ message })
}
export default errorHandler