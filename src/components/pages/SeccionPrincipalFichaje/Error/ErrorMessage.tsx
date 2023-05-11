interface IError {
  message: string;
}

const ErrorMessage = ({ message }: IError) => {
  return (
    <>
      {message && (
        <div className=''>
          <div className='mt-2 rounded-md border bg-red-600 py-1 text-center text-white'>
            {message}
          </div>
        </div>
      )}
    </>
  );
};

export default ErrorMessage;
