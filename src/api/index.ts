import express from 'express'
import pg from 'pg'

const app = express()
app.use(express.json())

const pool = new pg.Pool({
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  port: Number(process.env.PG_PORT),
  password: process.env.PG_PASSWORD,
});


app.get('/habits', async (req: any, res: any) => {
  const user_id = req.query.user_id
  const response: { habit_id: string, habit_title: string, done_count: number, like_count: number }[] = []
  try {
    const client = await pool.connect()
    const result_habits = await client.query(`SELECT * FROM habits WHERE user_id='${user_id}'`)
    for (const habit of result_habits.rows) {
      const habit_id = habit.habit_id
      const habit_title = habit.habit_title
      const result_done_habits = await client.query(`SELECT habits.habit_id,count(done_habits.date) as count FROM habits, done_habits WHERE habits.habit_id=done_habits.habit_id and habits.habit_id=${habit.habit_id} GROUP BY habits.habit_id`)
      const result_likes = await client.query(`SELECT habits.habit_id,count(likes.date) as count FROM habits, likes WHERE habits.habit_id=likes.habit_id and habits.habit_id=${habit.habit_id} GROUP BY habits.habit_id`)
      response.push({
        habit_id,
        habit_title,
        done_count: result_done_habits.rows[0].count,
        like_count: result_likes.rows[0].count,
      })
    }
    res.json(response)
  } catch (err) {
  }
})



app.post('/user', (req: any, res: any) => {
  pool.connect((err, client) => {
    if (err) {
      console.log(err);
    } else {
      console.log(req.body)
      client.query(`INSERT INTO users (user_id, password) VALUES ('${req.body.user_id}', '${req.body.password}')`,
        (err, result) => {
          res.json({ message: "aaa" })
        });
    }
  })
})

app.post('/login', (req: any, res: any) => {
  res.json({ user_id: "mamorinsan" })
})

export default {
  path: '/api',
  handler: app
}
