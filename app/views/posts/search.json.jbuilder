# @childrensは複数あるから一つずつ代入する、そして並べる
json.array! @childrens do |child|
  json.id child.id
  json.name child.name
end

json.array! @grandChilds do |gc|
  json.id gc.id
  json.name gc.name
end
