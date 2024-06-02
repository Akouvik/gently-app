!pip install ydf -U -qq

# Transfer the model from Google Drive to Colab
from google.colab import drive
drive.mount("/content/gdrive")
!cp "/content/gdrive/My Drive/simple_ml_for_sheets/Therapy prediction" model_zip
!unzip model_zip -d model_dir
  
# Prepare and load the model with YDF
import ydf

model = ydf.load_model("model_dir")

# Make predictions with the model
examples = {
  "Gently allows you to move at your own pace, but requires a bit of discipline to feel results. How much time can you dedicate?" : ["a, of, minutes, daily, couple", "a, hour, day, an", "a, hours, few, week"],
  "Tell us, please, what would you want to focus on and learn with Gently now?" : ["others, help", "my, manage, mental, improve, health, emotions, to, talk, it, be, about, able, others, help", "my, manage, mental, improve, health, stress, reduce, triggers, others, help"],
  "Which of the following feelings and experiences would you like to work on?" : ["peace", "happiness, acceptance, closure", "happiness, acceptance, closure"],
  "How difficult is it for you to be around reminders of your loss?" : ["not difficult", "extremely painful", "extremely painful"],
  "Given the importance of genuinely experiencing emotions during grief, and the wide variety of tools available, which methods have you tried to cope with your grief before?" : ["answer--, --no", "answer--, --no", "answer--, --no"],
  "What areas of your life have changed as a result of your loss? Please select all that apply" : ["and, family, hopes, dreams, planning, future, romantic, relationships, friendships, security, safety", "and, family, hopes, dreams, planning, future, romantic, relationships, friendships, security, safety", "and, hopes, dreams"],
  "What kind of pregnancy loss have you gone through?" : ["miscarriage", "miscarriage, stillbirth", "miscarriage"],
  "Which of the following parts of the program are you looking forward to? Please select all that apply" : ["reflecting, on, my, feelings, to, stories, listening, quizzes, playing, games, and", "reflecting, on, my, feelings, getting, expert, an, advice", "reflecting, on, my, feelings, to, stories, listening"],
  "How often do you feel feelings like that?" : ["time, the, of, some", "time, the, of, most", "time, the, of, some"],
  "Which of the following statements do you relate to the most right now?" : ["answer--, --no", "answer--, --no", "answer--, --no"],
  "In your opinion, have you personally had trouble accepting this loss?" : ["fully accepted", "profoundly challenging", "moderately difficult"],
  "Often grief affects your physical health as well. Have you felt any of the following symptoms?" : ["fatigue, sleep, deprivation", "pain, fatigue, fog, brain, sleep, changes, appetite, deprivation, stomach, nausea, &, back", "pain, stomach, nausea, &"],
  "Do you feel comfortable to share your age with us? If yes, please do" : ["than, more, 35", "21-27", "21-27"],
  "We know it’s hard to talk about loss... but maybe you can tell when did you lose your pregnancy?" : ["years, ago", "years, ago", "last, year"],
  "Which of the following makes you the most engaged and curious? Please select all that apply" : ["answer--, --no", "answer--, --no", "answer--, --no"],
  "Name" : ["catherine", "aj", "adele"],
  "Gently allows to move on your own pace, but requires a bit of discipline to feel results. How much time can you dedicate?" : ["answer--, --no", "answer--, --no", "answer--, --no"],
  "Are you currently working with a therapist?" : ["right, now, not", "right, now, not", "right, now, not"],
  "Also it's really common to feel entirely alone at the time after a pregnancy loss. Did you have anybody around to support you?" : ["partner, friend", "friend", "partner, member, family, friend"],
  "Which of the following activities makes you the most engaged and curious? Please select all that apply" : ["answer--, --no", "answer--, --no", "answer--, --no"],
  "How difficult has grief made it for you to continue working, take care of things at home, or get along with others?" : ["harder, bit, a", "tough, really", "harder, bit, a"],
  "Tell us, please, how have you been feeling recently?" : ["guilty", "numb, guilty, jealous", "jealous"],
  "Life has a way of throwing us experiences that can be beyond compare. How are you feeling about opening up and sharing your journey with others?" : ["answer--, --no", "answer--, --no", "answer--, --no"],
  "Many women share stories about not feeling supported enough for various reasons. Please share how much support you've had recently?" : ["no support", "no support", "significant support"],
  "During this sensitive time, we appreciate your openness. Do you have any other children?" : ["Yes", "No", "No"],
  "Which methods or tools have you tried to navigate through this difficult journey?" : ["support, groups, religion", "and, support, physical, groups, activity, journaling, poetry, arts", "psychotherapy"],
}
model.predict(examples)