import supabase from "./Supabase";

// apiPortfolio.js
export async function getHero() {
  const { data, error } = await supabase
    .from("hero")
    .select("*")
    .limit(1)
    .single();
  if (error) {
    console.error(error);
    throw new Error("Hero can't be fetched");
  }

  return data;
}

export async function getSocialLinks() {
  let { data, error } = await supabase.from("socialLinks").select("*");

  if (error) {
    console.error(error);
    throw new Error("Services link can't be fetched");
  }
  return data;
}

export async function getSkills() {
  let { data, error } = await supabase.from("skills").select("*");

  if (error) {
    console.error(error);
    throw new Error("Shills link can't be fetched");
  }
  return data;
}

export async function getServices() {
  let { data, error } = await supabase.from("services").select("*");

  if (error) {
    console.error(error);
    throw new Error("Services link can't be fetched");
  }
  return data;
}

export async function getTimeline() {
  let { data, error } = await supabase.from("timeline").select("*");

  if (error) {
    console.error(error);
    throw new Error("Timeline link can't be fetched");
  }
  return data;
}

export async function getCategories() {
  let { data, error } = await supabase
    .from("categories")
    .select("*")
    .limit(1)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Categories link can't be fetched");
  }
  return data;
}

export async function getProjects() {
  
let { data, error } = await supabase
  .from("projects")
  .select("*");
  if (error) {
    console.error(error);
    throw new Error("Projects link can't be fetched");
  }
  return data;
}
// //////////////////////
export async function getAbout() {
  
let { data, error } = await supabase
  .from("about")
  .select("*")
  .limit(1)
  .single();

    if (error) {
      console.error(error);
      throw new Error("About link can't be fetched");
    }
    return data;
}

export async function getContactInfo() {
  let { data, error } = await supabase
    .from("contactInfo")
    .select("*");

      if (error) {
        console.error(error);
        throw new Error("ContactInfo link can't be fetched");
      }
      return data;
}

export async function getContactMessage() {
  let { data, error } = await supabase
    .from("contactmessage")
    .select("*")
    .limit(1)
    .single();

      if (error) {
        console.error(error);
        throw new Error("Contact message link can't be fetched");
      }
      return data;
}
export async function getFooter() {

let { data, error } = await supabase
  .from("footer")
  .select("*")
  .limit(1)
  .single();

      if (error) {
        console.error(error);
        throw new Error("Footer link can't be fetched");
      }
      return data;
}

