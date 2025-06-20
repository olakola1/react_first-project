import app from './src/app';
import { PORT } from './src/app';

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});