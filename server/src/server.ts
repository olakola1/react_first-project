import app from './app';
import { PORT } from './app';

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});