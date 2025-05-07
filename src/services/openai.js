export async function getRecipeFromOpenAI(ingredients) {
    const SYSTEM_PROMPT = `
  Du bist ein hilfreicher Koch-Assistent, der eine Liste von Zutaten erhält,
  die ein Nutzer hat, und ein Rezept vorschlägt, das er mit einigen oder allen
  dieser Zutaten zubereiten könnte. Du musst nicht jede Zutat verwenden.
  Formatiere deine Antwort in Markdown.
  `;

    const ingredientsText = Array.isArray(ingredients)
        ? ingredients.join(", ")
        : String(ingredients);

    const messages = [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: "Hier ist die Zutatenliste: " + ingredientsText }
    ];

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-4o-mini",
            messages,
            max_tokens: 1000,
            temperature: 0.5
        })
    });

    if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error?.message || `Status ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
}
